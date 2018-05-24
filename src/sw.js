self.addEventListener('install', (event) => {
	console.log('[Service Worker]: Installation complete')
})

self.addEventListener('push', (event) => {
    console.log('[Notification]: Push received');
    console.log(event);
    // const text = event.data !== null ? event.data.text() : 'no data';
    // self.registration.showNotification(text, {
    //     icon: 'https://vignette2.wikia.nocookie.net/godzilla/images/a/ac/Domo-kun.png/revision/latest?cb=20150406230916'
    // })
})

if (module.hot) {
	module.hot.accept()
}
