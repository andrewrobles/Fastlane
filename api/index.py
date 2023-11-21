from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/1")
def psalm_1():
	return render_template('1.html')

@app.route("/2")
def psalm_2():
	return render_template('2.html')

@app.route("/3")
def psalm_3():
	return render_template('3.html')

@app.route("/4")
def psalm_4():
	return render_template('4.html')

@app.route("/5")
def psalm_5():
	return render_template('5.html')

@app.route("/6")
def psalm_6():
	return render_template('6.html')
