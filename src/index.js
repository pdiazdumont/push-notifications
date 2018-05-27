import base64 from "binary-base64"
import riot from "riot"
import "spectre.css/dist/spectre-icons.css"
import "spectre.css/dist/spectre.css"
import keys from "./keys.json"
import * as push from "./lib/push"
import "./index.html"
import "./riot/app.tag"

riot.mount("app", {
	push: push,
	key: base64.encode(keys.publicKey),
	server: "http://localhost:5000/push-notifications-demo-c6fe1/us-central1/push"
})
