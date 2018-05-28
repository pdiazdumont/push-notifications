<notification>
	<div class="empty">
		<div class="empty-action">
			<form onsubmit={ sendPushNotification }>
				<div class="form-group">
					<label class="form-label" for="notification-title">Custom title</label>
					<input class="form-input" type="text" id="notification-title" maxlength="50" required placeholder="Max 50 characters">
				</div>
				<div class="form-group">
					<label class="form-label" for="notification-body">Custom body</label>
					<input class="form-input" type="text" id="notification-body" maxlength="100" required placeholder="Max 100 characters">
				</div>
				<div class="form-group">
					<label class="form-label" for="notification-image">Custom image</label>
					<input class="form-input" type="text" id="notification-image" required placeholder="Image url">
				</div>
				<input class="btn btn-primary" type="submit" value="Send custom push notification">
			</form>
		</div>
	</div>

	<script>
		this.sendPushNotification = async (event) => {
			event.preventDefault()
			const payload = {
				title: document.getElementById("notification-title").value,
				body: document.getElementById("notification-body").value,
				image: document.getElementById("notification-image").value
			}
			this.parent.trigger("sendPushNotification", payload)
		}
	</script>

	<style>
		.empty {
			padding-bottom: 20px;
			padding-top: 1px;
			text-align: left;
		}

		.btn {
			margin-top: 10px;
			width: 100%;
		}
	</style>
</notification>
