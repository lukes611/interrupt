
function LMat3(inp){
	if(inp === undefined)
		this.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	else
		this.arr = inp;
}

LMat3.prototype.toString = function(){
	return '|' + this.arr[0] + ',' + this.arr[1] + ',' + this.arr[2] + '|\n' + 
		   '|' + this.arr[3] + ',' + this.arr[4] + ',' + this.arr[5] + '|\n' +
		   '|' + this.arr[6] + ',' + this.arr[7] + ',' + this.arr[8] + '|\n';
};

LMat3.prototype.clone = function(){
	return new LMat3(this.arr.slice());
};

LMat3.iso = function(){
	var sin45 = Math.sin(45 / 57.3);
	var cos45 = Math.cos(45 / 57.3);
	var sin30 = Math.sin(30 / 57.3);
	var cos30 = Math.cos(30 / 57.3);
	var cos90 = Math.cos(90 / 57.3);
	var sin90 = Math.sin(90 / 57.3);
	var mrx = new LMat3([1, 0, 0, 0, cos30, -sin30, 0, sin30, cos30]);
	var mry = new LMat3([cos45, 0, sin45, 0, 1, 0, -sin45, 0, cos45]);
	var mrx90 = new LMat3([1, 0, 0, 0, cos90, -sin90, 0, sin90, cos90]);
	mrx = mrx.mult(mry.mult(mrx90));
	return mrx;
};

LMat3.iiso = function(){
	var sin45 = Math.sin(45 / 57.3);
	var cos45 = Math.cos(45 / 57.3);
	var sin30 = Math.sin(30 / 57.3);
	var cos30 = Math.cos(30 / 57.3);
	var cos90 = Math.cos(90 / 57.3);
	var sin90 = Math.sin(90 / 57.3);
	var mrx = new LMat3([1, 0, 0, 0, cos30, -sin30, 0, sin30, cos30]);
	var mry = new LMat3([cos45, 0, sin45, 0, 1, 0, -sin45, 0, cos45]);
	var mrx90 = new LMat3([1, 0, 0, 0, cos90, -sin90, 0, sin90, cos90]);
	mrx = mrx.mult(mry.mult(mrx90));
	return mrx.transpose();	
};


LMat3.prototype.imult = function(m){
	this.arr = [
		this.arr[0] * m.arr[0] + this.arr[1] * m.arr[3] + this.arr[2] * m.arr[6],
		this.arr[0] * m.arr[1] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[7],
		this.arr[0] * m.arr[2] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[8],

		this.arr[3] * m.arr[0] + this.arr[4] * m.arr[3] + this.arr[5] * m.arr[6],
		this.arr[3] * m.arr[1] + this.arr[4] * m.arr[4] + this.arr[5] * m.arr[7],
		this.arr[3] * m.arr[2] + this.arr[4] * m.arr[5] + this.arr[5] * m.arr[8],

		this.arr[6] * m.arr[0] + this.arr[7] * m.arr[3] + this.arr[8] * m.arr[6],
		this.arr[6] * m.arr[1] + this.arr[7] * m.arr[4] + this.arr[8] * m.arr[7],
		this.arr[6] * m.arr[2] + this.arr[7] * m.arr[5] + this.arr[8] * m.arr[8], 
	];
};

LMat3.prototype.mult = function(m){
	return new LMat3([
		this.arr[0] * m.arr[0] + this.arr[1] * m.arr[3] + this.arr[2] * m.arr[6],
		this.arr[0] * m.arr[1] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[7],
		this.arr[0] * m.arr[2] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[8],

		this.arr[3] * m.arr[0] + this.arr[4] * m.arr[3] + this.arr[5] * m.arr[6],
		this.arr[3] * m.arr[1] + this.arr[4] * m.arr[4] + this.arr[5] * m.arr[7],
		this.arr[3] * m.arr[2] + this.arr[4] * m.arr[5] + this.arr[5] * m.arr[8],

		this.arr[6] * m.arr[0] + this.arr[7] * m.arr[3] + this.arr[8] * m.arr[6],
		this.arr[6] * m.arr[1] + this.arr[7] * m.arr[4] + this.arr[8] * m.arr[7],
		this.arr[6] * m.arr[2] + this.arr[7] * m.arr[5] + this.arr[8] * m.arr[8], 
	]);	
};


LMat3.prototype.multLV2 = function(p){
	return new LV2(p.x * this.arr[0] + p.y * this.arr[1] + 0 * this.arr[2],
				   p.x * this.arr[3] + p.y * this.arr[4] + 0 * this.arr[5]);
};

LMat3.prototype.itranspose = function(){
	this.arr = [
		this.arr[0], this.arr[3], this.arr[6],
		this.arr[1], this.arr[4], this.arr[7],
		this.arr[2], this.arr[5], this.arr[8] 
	];
};

LMat3.prototype.transpose = function(){
	return new LMat3([
		this.arr[0], this.arr[3], this.arr[6],
		this.arr[1], this.arr[4], this.arr[7],
		this.arr[2], this.arr[5], this.arr[8] 
	]);
};