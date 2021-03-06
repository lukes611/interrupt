/*
	a canvas object:
	variables:
		canvas - the canvas html5 object
		w, h   - the width and height of the canvas
		context - the context used for drawing

	functions:
		getCenter -> returns the center of the screen as LV2
		setStroke, setFill -> sets the stroke and fill colors
		rect, rectf -> draws/fills a rectangle
		circle, circlef -> draws/fills a circle
		transform -> set the transform to an LMat3 matrix
		resetTransform -> resets the transform
		line -> draws a line
		dimage -> draws an LCanvas as an image to the screen

	static functions:
		image -> loads an image as a canvas object
*/

function LCanvas(w, h){
	this.canvas = document.createElement('canvas');
	this.canvas.width = w;
	this.canvas.height = h;
	this.context = this.canvas.getContext('2d');
	this.w = w;
	this.h = h;
}

LCanvas.prototype.getCenter = function(){
	return new LV2(this.w * 0.5, this.h * 0.5);
};

LCanvas.prototype.setStroke = function(color){
	this.context.strokeStyle = color;
};

LCanvas.prototype.setFill = function(color){
	this.context.fillStyle = color;
};

LCanvas.prototype.rect = function(x, y, w, h){
	this.context.beginPath();
	this.context.rect(x, y, w, h);
	this.context.stroke();
};


LCanvas.prototype.rectf = function(x, y, w, h){
	this.context.beginPath();
	this.context.rect(x, y, w, h);
	this.context.fill();
};

LCanvas.prototype.circle = function(x, y, r){
	this.context.beginPath();
	this.context.arc(x, y, r, 0, 2 * Math.PI, false);
	this.context.stroke();
};

LCanvas.prototype.circlef = function(x, y, r){
	this.context.beginPath();
	this.context.arc(x, y, r, 0, 2 * Math.PI, false);
	this.context.fill();
};

LCanvas.prototype.transform = function(m){
	this.context.transform(m.arr[0], m.arr[3], m.arr[1], m.arr[4], m.arr[2], m.arr[5]);
};

LCanvas.prototype.resetTransform = function(){
	this.context.setTransform(1, 0, 0, 1, 0, 0);
};

LCanvas.prototype.line = function(x, y, x2, y2){
	this.context.beginPath();
	this.context.moveTo(x, y);
	this.context.lineTo(x2, y2);
	this.context.stroke();
};

LCanvas.prototype.dimage = function(x, y, im){
	this.context.drawImage(im.canvas, x, y);
};

LCanvas.image = function(name, w, h, cb){
	var img = new Image();
	img.onload = function(){
		var rv = new LCanvas(w, h);
		rv.context.drawImage(img, 0, 0, w, h);
		cb(rv);
	};
	img.src = name;
};




