import riot from "riot"
import "spectre.css/dist/spectre-icons.css"
import "spectre.css/dist/spectre.css"
import keys from "./keys.json"
import * as push from "./lib/push"
import "./index.html"
import "./riot/app.tag"
import "./riot/samples.tag"
import "./riot/notification.tag"

riot.mount("app", {
	push: push,
	key: urlBase64ToUint8Array(keys.publicKey),
	server: "http://localhost:5000/push-notifications-demo-c6fe1/us-central1/push"
})

function urlBase64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding)
		.replace(/\-/g, '+')
		.replace(/_/g, '/');

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}
