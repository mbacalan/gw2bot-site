from flask import Flask, render_template


app = Flask(__name__)
BOT_INVITE_LINK = "https://discordapp.com/oauth2/authorize?client_id=310050883100737536&scope=bot&permissions=27648"
BOT_SUPPORT_SERVER_LINK = "https://discord.gg/VyQTrwP"

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