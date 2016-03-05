/*
LV2 is a 2d vector object
LV3 is a 3d vector object

LV functionality:
	toString
	copy
	i[add/scale/div/sub] ->affects this object
	add/scale/div/sub ->affects others
	setAs -> set from other object
	setValues -> set from parameters (resets like constructor)
	dist
	round/floor
	mag
LV3:
	cross/icross

LMat3 is a 3d matrix object
LMat4 is a 4d matrix object
	constructors take in a list of values to represent the values or nothing and all are set to zero
	toString
	i/transpose
		


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


// LV3

function LV3(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
}

LV3.prototype.toString = function(){
	return '[' + this.x + ',' + this.y + ',' + this.z + ']';
};

LV3.prototype.copy = function(){
	return new LV3(this.x, this.y, this.z);
};

LV3.prototype.setAs = function(o){
	this.x = o.x;
	this.y = o.y;
	this.z = o.z;
};

LV3.prototype.setValues = function(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
};

LV3.prototype.add = function(o){
	return new LV3(this.x + o.x, this.y + o.y, this.z + o.z);
};

LV3.prototype.iadd = function(o){
	this.x += o.x;
	this.y += o.y;
	this.z += o.z;
};

LV3.prototype.sub = function(o){
	return new LV3(this.x - o.x, this.y - o.y, this.z - o.z);
};

LV3.prototype.isub = function(o){
	this.x -= o.x;
	this.y -= o.y;
	this.z -= o.z;
};

LV3.prototype.scale = function(s){
	return new LV3(this.x * s, this.y * s, this.z * s);
};

LV3.prototype.iscale = function(s){
	this.x *= s;
	this.y *= s;
	this.z *= s;
};

LV3.prototype.div = function(s){
	return new LV3(this.x / s, this.y / s, this.z / s);
};

LV3.prototype.idiv = function(s){
	this.x /= s;
	this.y /= s;
	this.z /= s;
};
0 1 0
1 0 0
0 -1 0

LV3.prototype.dot = function(o){
	return this.x * o.x + this.y * o.y + this.z * o.z;
};

LV3.prototype.cross = function(o){
	return new LV3(this.y * o.z - this.z * o.y,
				   this.z * o.x - this.x * o.z,
				   this.x * o.y - this.y * o.x
			);
};

LV3.prototype.icross = function(o){
	var x = this.x;
	var y = this.y;
	var z = this.z;
	this.x = y * o.z - z * o.y;
	this.y = z * o.x - x * o.z;
	this.z = x * o.y - y * o.x;
};


LV3.prototype.dist = function(o){
	var dx = this.x - o.x;
	var dy = this.y - o.y;
	var dz = this.z - o.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

LV3.prototype.mag = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

LV3.prototype.round = function(){
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	this.z = Math.round(this.z);
};

LV3.prototype.floor = function(){
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	this.z = Math.floor(this.z);
};

LV3.prototype.unit = function(){
	var m = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	return new LV3(this.x / m, this.y / m, this.z / m);	
};

LV3.prototype.iunit = function(){
	var m = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	this.x /= m;
	this.y /= m;
	this.z /= m;	
};

//LMat3

