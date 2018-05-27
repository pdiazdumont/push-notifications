export const browserIsSupported = () => ("serviceWorker" in navigator) && ("PushManager" in window)

export const requestPermission = async () => await Notification.requestPermission()

export const registerServiceWorker = async (file) => await navigator.serviceWorker.register(file)

export const getServiceWorker = async () => await navigator.serviceWorker.ready

export const getSubscription = async () => {
	const worker = await navigator.serviceWorker.ready
	return worker.pushManager.getSubscription()
}

export const subscribeUser = async (key) => {
	const options = {
		userVisibleOnly: true,
		applicationServerKey: key
	}
	const worker = await getServiceWorker()
	return await worker.pushManager.subscribe(options)
}

export const unsubscribeUser = async (worker) => await worker.pushManager.unsubscribe()
