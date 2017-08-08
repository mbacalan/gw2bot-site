import os
from flask import Flask, render_template, redirect, session, request, url_for, jsonify
from requests_oauthlib import OAuth2Session
import config


app = Flask(__name__)
app.config.from_object(config)

OAUTH2_CLIENT_ID = config.OAUTH2_CLIENT_ID
OAUTH2_CLIENT_SECRET = app.config["SECRET_KEY"]
OAUTH2_REDIRECT_URI = 'http://localhost:5000/callback'

API_BASE_URL = 'https://discordapp.com/api'
AUTHORIZATION_BASE_URL = API_BASE_URL + '/oauth2/authorize'
TOKEN_URL = API_BASE_URL + '/oauth2/token'
BOT_INVITE_LINK = config.BOT_INVITE_LINK
BOT_SUPPORT_SERVER_LINK = config.BOT_SUPPORT_SERVER_LINK


if 'http://' in OAUTH2_REDIRECT_URI:
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = 'true'


def token_updater(token):
    session['oauth2_token'] = token


def make_session(token=None, state=None, scope=None):
    return OAuth2Session(
        client_id=OAUTH2_CLIENT_ID,
        token=token,
        state=state,
        scope=scope,
        redirect_uri=OAUTH2_REDIRECT_URI,
        auto_refresh_kwargs={
            'client_id': OAUTH2_CLIENT_ID,
            'client_secret': OAUTH2_CLIENT_SECRET,
        },
        auto_refresh_url=TOKEN_URL,
        token_updater=token_updater)



@app.route('/')
def home():
    return render_template('index.html', invite_link = BOT_INVITE_LINK, 
                           support_lipynk = BOT_SUPPORT_SERVER_LINK)


@app.route('/commands')
def commands():
    return render_template('commands.html', support_link = BOT_SUPPORT_SERVER_LINK)


@app.route('/faq')
def faq():
    return render_template('faq.html', support_link = BOT_SUPPORT_SERVER_LINK)

@app.route('/login')
def login():
    discord = make_session(scope=["identify"])
    authorization_url, state = discord.authorization_url(AUTHORIZATION_BASE_URL)
    session['oauth2_state'] = state
    return redirect(authorization_url)

@app.route('/callback')
def callback():
    if request.values.get('error'):
        return request.values['error']
    discord = make_session(state=session.get('oauth2_state'))
    token = discord.fetch_token(
        TOKEN_URL,
        client_secret=OAUTH2_CLIENT_SECRET,
        authorization_response=request.url)
    session['oauth2_token'] = token
    return redirect(url_for('.home'))



if __name__ == '__main__':
    app.run()