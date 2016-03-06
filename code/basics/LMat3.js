


LMat3.iso = function(){
	/*var sin45 = Math.sin(45 / 57.3);
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
	*/
	return LMat3.rotateX(30).mult(LMat3.rotateY(45).mult(LMat3.rotateX(90)))
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



