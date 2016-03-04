
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

LMat3.print = function(th){
	console.log(th.toString());
};