/**
 * graphics.js - (Almost) accurate Implementation of java.awt.Graphics in
 * JavaScript (c) 2015 DarkCart
 */

var ctx;

function init(cwidth, cheight) {
	var canvas = document.createElement("canvas");
	canvas.width = cwidth;
	canvas.height = cheight;
	document.body.appendChild(canvas);
	ctx = canvas.getContext("2d");
}

function setFillColor(color) {
	ctx.fillStyle = color;
}

function setStokeColor(color) {
	ctx.strokeStyle = color;
}

function drawRect(x, y, width, height) {
	ctx.stokeRect(x, y, width, height);
}

function fillRect(x, y, width, height) {
	ctx.fillRect(x, y, width, height);
}

function drawOval(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.stoke();
}

function fillOval(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function drawImage(img, x, y) {
	var image = document.getElementById(img);
	ctx.drawImage(image, x, y);
}

function drawImage(img, x, y, width, height) {
	var image = document.getElementById(img);
	ctx.drawImage(image, x, y, width, height);
}

function drawLine(startx, starty, endx, endy) {
	ctx.beginPath();
	ctx.moveTo(startx, starty);
	ctx.lineTo(endx, endy);
	ctx.stroke();
}

function setFont(font) {
	ctx.font = font;
}

function drawString(string, x, y) {
	ctx.fillText(string, x, y);
}

function getFillColor() {
	return ctx.fillStyle;
}

function getStrokeColor() {
	return ctx.strokeColor;
}

function getFont() {
	return ctx.font;
