const functions = require("firebase-functions")
const webpush = require("web-push")
const cors = require("cors")({
	origin: true,
});
const keys = require("./keys.json")

exports.push = functions.https.onRequest((request, response) => {
	if (request.method === "OPTIONS") {
		return response
			.status(200)
			.header("Access-Control-Allow-Origin", "*")
			.header("Access-Control-Allow-Methods", "POST")
			.header("Access-Control-Allow-Headers", "Content-Type, application/json")
			.send("Ok")
	}

	if (request.method !== "POST") {
		return response
			.status(400)
			.send("Request method should be POST")
	}

	if (request.headers["content-type"] !== "application/json") {
		return response
			.status(400)
			.send("Request content-type should be 'application/json'")
	}

	cors(request, response, () => {
		const body = request.body

		webpush.setGCMAPIKey(keys.publicKey);
		webpush.setVapidDetails(
			"mailto:test@test.com",
			keys.publicKey,
			keys.privateKey
		)

		webpush.sendNotification(body.subscription, JSON.stringify(body.payload))

		return response
			.status(200)
			.send("Ok")
	})
});
