# gw2bot-site
[![Build Status](https://travis-ci.org/pen-mb/gw2bot-site.svg?branch=master)](https://travis-ci.org/pen-mb/gw2bot-site)

The website of [GW2Bot by Maselkov](https://github.com/Maselkov/GW2Bot). Deployed at [gw2bot.info](https://gw2bot.info/).

The purpose of the website is to provide information about the bot, present its features and make it more accessible.

## Installation

This project uses [Flask](http://flask.pocoo.org/), so you will need Python. If you have Python, you can then use ``pip install -r requirements.txt``. To install the dev-dependencies, use ``npm install`` or ``yarn install``.

## Development

Once you have everything installed, use the default gulp task with ``gulp`` or ``gulp default``. This will run the app, process .scss into .css, prefix them and start [browsersync](https://www.browsersync.io/).


## Production

To build for production, use ``gulp dist``. It will compress images losslessly, minify .js and .css and put everything in the **dist** folder. You can then run ``gw2botsite.py`` inside the **dist** folder to see the production version.

