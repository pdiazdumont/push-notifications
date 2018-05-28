self.addEventListener('install', (event) => {
	console.log('[Service Worker]: Installation complete')
})

self.addEventListener('push', (event) => {
	const data = event.data.json()
	self.registration.showNotification(data.title, data)
})
