
function LBox(w, h, color){
	var style = 'style="width:'+w+'px;height:'+h+'px;background-color:'+color+';"';
	this.elem = $('<div '+style+'></div>');
	$(document.body).append(this.elem);
};

LBox.prototype.show = function(){
	this.elem.show();
};

LBox.prototype.hide = function(){
	this.elem.hide();
};