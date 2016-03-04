function LCanvas(){
	this.idName = "myCanvas";
	this.canvas = document.getElementById(this.idName);
	this.context = this.canvas.getContext('2d');
	this.w = this.canvas.width;
	this.h = this.canvas.height;
}

LCanvas.prototype.setStroke = function(color){
	this.context.strokeStyle = color;
};

LCanvas.prototype.setFill = function(color){
	this.context.fillStyle = color;
};

LCanvas.prototype.rect = function(x, y, w, h){
	this.context.rect(x, y, w, h);
	this.context.stroke();
};


LCanvas.prototype.rectf = function(x, y, w, h){
	this.context.rect(x, y, w, h);
	this.context.fill();
};


