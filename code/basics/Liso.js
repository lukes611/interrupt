function Liso(){

}

Liso.iso44 = function(p){
	if(p === undefined)
		return LMat4.rotateX(30).mult(LMat4.rotateY(45));
	return LMat4.rotateX(30).mult(LMat4.rotateY(45).mult(LMat4.trans(-p.x, -p.y, -p.z)));
};

Liso.iiso44 = function(){
	return LMat4.rotateX(30).mult(LMat4.rotateY(45)).transpose();
};

Liso.iso33 = function(p){
	if(p === undefined)
		return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90)));
	return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90).mult(LMat3.trans(-p.x, -p.y))));
};

Liso.iiso = function(){
	return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90))).transpose();
};


Liso.screen2Tile = function(p){
	var m = Liso.iso33();
	var p1 = new LV2(1, 0);
	var p2 = new LV2(0, -1);
	p1 = m.multLV2(p1);
	p2 = m.multLV2(p2);
	return new LV2(p1.dot(p) * 2, p2.dot(p) * 2);
};

LMat3.iso = function(){
	return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90)));
};

LMat3.iiso = function(){
	return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90))).transpose();	
};

function LisoMap(w, h){
	this.w = w;
	this.h = h;
	this.focus = new LV2(0, 0);
}



