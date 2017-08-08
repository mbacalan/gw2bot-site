from flask import Flask, render_template
import config


app = Flask(__name__)
app.config.from_object(config)
BOT_INVITE_LINK = config.BOT_INVITE_LINK
BOT_SUPPORT_SERVER_LINK = config.BOT_SUPPORT_SERVER_LINK

@app.route('/')
def home():
    return render_template('index.html', invite_link = BOT_INVITE_LINK, 
                           support_link = BOT_SUPPORT_SERVER_LINK)


@app.route('/commands')
def commands():
    return render_template('commands.html', support_link = BOT_SUPPORT_SERVER_LINK)


@app.route('/faq')
def faq():
    return render_template('faq.html', support_link = BOT_SUPPORT_SERVER_LINK)

if __name__ == '__main__':
    app.run()