<samples>
	<div each={ samples } class="tile tile-centered">
		<div class="tile-icon">
			<div class="example-tile-icon">
			<i class="icon icon-file centered"></i>
			</div>
		</div>
		<div class="tile-content">
			<div class="tile-title">{ title }</div>
		</div>
		<div class="tile-action">
			<button class="btn btn-sm" onclick={ pushNotification }>Push</button>
		</div>
	</div>

	<script>
		import samples from "./../samples.json"

		this.samples = samples

		this.pushNotification = (event) => {
			event.stopPropagation()
			this.parent.trigger("sendPushNotification", event.item.payload)
		}
	</script>

	<style>
		.tile {
			margin-bottom: 10px;
			margin-top: 22px;
		}
	</style>
</samples>
