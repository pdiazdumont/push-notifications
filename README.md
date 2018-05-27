# Push notifications demo
This demo showcases how to implement a push notification functionality. Packages used:

- Client
	- [Spectre.css](https://picturepan2.github.io/spectre/index.html): For the UI look and feel, nice and simple (:
	- [Riot](https://riot.js.org/): For the view implementation, I'm a hipster for javascript tools

- Server
	- [Firebase](https://firebase.google.com/): Cloud functions are a nice way to simulate simple server operations!

## Installation
This project consists of two parts: the web application and the server. In this case the server is just a Firebase cloud function that received a POST request and triggers a push notification.

To perform a correct installation you need to run `npm install` or `yarn` in the **root** folder and the **server** folder.

*Note*: The functionality requires a pair of public/private keys, which 

## Running the project
Please check the information in the `package.json` file and you will see the list of available commands.

### Client
- Development: `npm run dev` or `yarn dev`
- Production: `npm run build` or `yarn build`

### Firebase function
- Development: `npm run serve` or `yarn serve`
- Production:  `npm run deploy` or `yarn deploy`

### Keys
In order to generate a valid pair of cryptographic keys and store them in the way that this project requires you can execute the command `npm run keys` or `yarn keys`. Please consider that this command will be executed automatically as a post install hook (after `npm install` or `yarn` is completed).
