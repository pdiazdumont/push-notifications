<app>
	<div class="container grid-lg">
		<header class="navbar">
			<section class="navbar-section">
				<h1>Push notifications demo</h1>
			</section>
			<section class="navbar-section">
				<a href="https://github.com/pdiazdumont/push-notifications" class="btn btn-link">GitHub</a>
			</section>
		</header>
		<div class="toast toast-error" if={ !store.browserIsSupported }>
			Your browser doesn't support push notifications :C
			<br>
			What are you using? a toaster?
		</div>
		<main if={ store.browserIsSupported }>
			<div class="columns">
				<div class="column col-6">
					<div class="form-group">
						<label class="form-switch">
							<input type="checkbox" onChange={ togglePushNotifications }>
							<i class="form-icon"></i> Use push notifications
						</label>
					</div>
				</div>
				<div class="column col-6">
					<button if={store.pushIsEnabled} class="btn btn-primary" onclick={ sendPushNotification }>Send push notification</button>
				</div>
			</div>
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

		this.togglePushNotifications = async e => {
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

		this.sendPushNotification = async () => {
			await fetch(opts.server, {
				method: "POST",
				body: JSON.stringify({
					subscription: this.store.subscription,
					payload: {
						text: "weee"
					}
				}),
				headers:{
    				"Content-Type": "application/json"
  				}
			})
		}

		this.permissionIsDenied = () => this.store.notificationPermissionStatus === "denied"
		this.permissionIsGranted = () => this.store.notificationPermissionStatus === "granted"
	</script>
</app>
