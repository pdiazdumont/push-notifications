init()

async function init() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", async () => {
			await registerServiceWorker("sw.js")
		})
	}
}

async function registerServiceWorker(serviceWorker) {
    return new Promise((resolve, reject) => {
        try {
			navigator.serviceWorker
				.register(serviceWorker)
				.then(registration => resolve(registration))
        }
        catch (error) {
            reject(`Service worker registration failed. Error: ${error}`)
        }
    })
}

if (module.hot) {
	module.hot.accept()
}
