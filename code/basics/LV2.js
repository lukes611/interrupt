/*
LV2 is a 2d vector object
*/


function LV2(x, y){
	this.x = x;
	this.y = y;
}

LV2.prototype.toString = function(){
	return '[' + this.x + ',' + this.y + ']';
};

LV2.prototype.copy = function(){
	return new LV2(this.x, this.y);
};

LV2.prototype.setAs = function(o){
	this.x = o.x;
	this.y = o.y;
};

LV2.prototype.setValues = function(x, y){
	this.x = x;
	this.y = y;
};

LV2.prototype.add = function(o){
	return new LV2(this.x + o.x, this.y + o.y);
};

LV2.prototype.iadd = function(o){
	this.x += o.x;
	this.y += o.y;
};

LV2.prototype.sub = function(o){
	return new LV2(this.x - o.x, this.y - o.y);
};

LV2.prototype.isub = function(o){
	this.x -= o.x;
	this.y -= o.y;
};

LV2.prototype.scale = function(s){
	return new LV2(this.x * s, this.y * s);
};

LV2.prototype.iscale = function(s){
	this.x *= s;
	this.y *= s;
};

LV2.prototype.div = function(s){
	return new LV2(this.x / s, this.y / s);
};

LV2.prototype.idiv = function(s){
	this.x /= s;
	this.y /= s;
};

LV2.prototype.dot = function(o){
	return this.x * o.y - this.y * o.x;
};

LV2.prototype.dist = function(o){
	var dx = this.x - o.x;
	var dy = this.y - o.y;
	return Math.sqrt(dx * dx + dy * dy);
};

LV2.prototype.mag = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

LV2.prototype.round = function(){
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
};

LV2.prototype.floor = function(){
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
};