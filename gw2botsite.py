from flask import Flask, render_template
import config

app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")

app.config.from_object(config)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run('0.0.0.0')
