
function LBox(w, h){
	var wdist = (100 - (w+10)) / 2;
	var style = 'style="position:fixed;width:'+w+'%;height:'+h+'%;background-color:rgb(20, 20, 20);overflow-x:None;overflow-y:auto; \
	margin-left:'+wdist+'%;padding:5%;font-family: ‘Trebuchet MS’, Helvetica, sans-serif;"';

	this.elem = $('<div '+style+'></div>');
	this.subs = [];
	$(document.body).append(this.elem);
};

LBox.prototype.show = function(){
	this.elem.show();
};

LBox.prototype.hide = function(){
	this.elem.hide();
};

LBox.prototype.add = function(obj){
	this.subs.push(obj);
	this.elem.append(obj.elem);
};


function LLabel(w, h, x, y, t){
	var style = 'style="width:'+w+'%;height:'+h+'%;color:white;margin:1%;background-color:rgb(20, 20, 20);padding:1%;text-align:center;"';
	this.elem = $('<div '+style+'>'+t+'</div>');
};

function LButton(w, h, x, y, t, cb){
	var style = 'style="width:'+w+'%;height:'+h+'%;color:white;cursor:pointer;margin:1%;background-color:rgb(44, 44, 44);padding:1%;text-align:center;"';
	this.elem = $('<div '+style+'>'+t+'</div>');
	var e = this.elem;
	this.elem.mouseover(function(){e.css('background-color', 'rgb(41, 143, 204)');});
	this.elem.mouseout(function(){e.css('background-color', 'rgb(44, 44, 44)');});
	if(cb !== undefined) this.elem.click(cb);
};



