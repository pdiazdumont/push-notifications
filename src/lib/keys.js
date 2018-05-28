const webpush = require("web-push")
const fs = require("fs")

const keys = webpush.generateVAPIDKeys()

fs.writeFile(__dirname + "/../../server/keys.json", JSON.stringify(keys))
fs.writeFile(__dirname + "/../../src/keys.json", JSON.stringify({ publicKey: keys.publicKey }))
