# gw2bot-site

The website of [GW2Bot](https://github.com/Maselkov/GW2Bot), live at [gw2bot.info](https://gw2bot.info/)

## About

This website is built using [Nuxt.js](nuxtjs.org/) and takes advantage of an embedded [Express.js](https://expressjs.com/) API.

It showcases some features of the bot, lists the available commands and hosts a couple of FAQ's.

It also has Discord authentication for viewing encounter logs that are uploaded via the bot.

## Setup

``` bash
# Install dependencies
npm install

# Run locally for development
npm run dev

# Build for production
npm run build
```

> You'll need a Discord bot's Client ID and add it a Redirect URI to use authentication. Replace the variables in `nuxt.config.js` file.

## Contribution

Feel free to create an issue or directly create a PR for any improvement you'd like to add.

For PR's, please explain the issue, your solution/improvement and make sure ESLint is happy.

## Thanks

[Maselkov](https://github.com/Maselkov/) for creating the bot!

[Sugarcube](https://github.com/SugarcubeIsCoding/) for the creative styling contributions!

You, for reading this!
