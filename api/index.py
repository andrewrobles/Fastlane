from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/1")
def psalm_1():
	return render_template('1.html')
