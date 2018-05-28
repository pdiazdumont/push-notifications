<app>
	<div class="container grid-lg">
		<div class="columns">
			<div class="column">
				<header class="navbar">
					<section class="navbar-section">
						<b>Push notifications demo</b>
					</section>
					<section class="navbar-section">
						<a href="https://github.com/pdiazdumont/push-notifications" class="btn btn-primary">GitHub</a>
					</section>
				</header>
			</div>
		</div>
		<div class="divider"></div>
		<div if={ !store.browserIsSupported } class="toast toast-error">
			Your browser doesn't support push notifications :C
			<br>
			What are you using? a toaster?
		</div>
		<main if={ store.browserIsSupported }>
			<div class="columns">
				<div class="column col-online">
					<div class="form-group text-center">
						<label class="form-switch">
							<input type="checkbox" onChange={ togglePushNotifications }>
							<i class="form-icon"></i> Use push notifications
						</label>
					</div>
				</div>
			</div>
			<virtual if={ store.pushIsEnabled }>
				<div class="divider"></div>
				<div class="columns">
					<div class="column col-6 col-mr-auto col-sm-12">
						<samples></samples>
					</div>
					<div class="divider hide-md"></div>
					<div class="column col-5 col-ml-auto col-sm-12">
						<notification></notification>
					</div>
				</div>
			</virtual>
		</main>
	</div>

	<script>
		this.store = {
			browserIsSupported: opts.push.browserIsSupported(),
			notificationPermissionStatus: Notification.permission,
			pushIsEnabled: false,
			subscription: null
		}

		this.on("mount", async () => {
			await opts.push.registerServiceWorker("sw.js")
		})

		this.on("sendPushNotification", async (payload) => {
			await fetch(opts.server, {
				method: "POST",
				body: JSON.stringify({
					subscription: this.store.subscription,
					payload
				}),
				headers:{
    				"Content-Type": "application/json"
  				}
			})
		})

		this.togglePushNotifications = async (event) => {
			this.store.pushIsEnabled = !this.store.pushIsEnabled

			let subscription = await opts.push.getSubscription()
			if (this.store.pushIsEnabled) {
				if (subscription == null) {
					subscription = await opts.push.subscribeUser(opts.key)
				}
				this.store.subscription = subscription
			}
			else {
				await subscription.unsubscribe()
				this.store.subscription = null
			}
			this.update()
		}
	</script>

	<style>
		.navbar {
			margin-top: 10px;
		}
	</style>
</app>
