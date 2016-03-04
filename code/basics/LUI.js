
//two boxes, controlled by a gui
/*
top box: view individual items, main screen, view item lists, read notes and logs, read cases, suspects, people
bottom box: message system/question system / basic menu(pause, logs etc...)
do bottom box foist
*/

function LBottomBox(){
	//this.subs = {};
	this.elem = $('<div class="LBottomBox"></div>');
	this.state = 0; // basic menu = 0, message system = 1
	this.messageSystem = null;
	this.basicMenu = new LGrid(3, [new LButton(1, 'Pause'),
		new LButton(1, 'Case'),
		new LButton(1, 'Save'),
		new LButton(1, 'About'),
		new LButton(1, 'Quit')]);
	this.elem.append(this.basicMenu.elem);
	$(document.body).append(this.elem);
	this.add = function(name, gui){
		//this.subs[name] = gui;
		//this.elem.append(gui.elem);
	};
}



function LBox(type){
	var w = 60;
	var h = 45;
	var style = [];
	var wdist = (100 - (w+10)) / 2;
	if(type !== undefined && type == 1){
		h = 25;
		w = 70;
		style.push('background-color:rgb(20,20,20)');	
		style.push('bottom:0%');
		style.push('padding-top:.2%');
		style.push('padding-left:1%');
		wdist = (100 - (w+.4)) / 2;
	}else{
		style.push('background-color:rgb(20,20,20)');
		style.push('padding:5%');
	}
	
	style.push('position:fixed');
	style.push('width:' + w + '%');
	style.push('height:' + h + '%');
	
	style.push('overflow-x:None');
	style.push('overflow-y:auto');
	style.push('margin-left:' + wdist + '%');
	
	style.push('font-family: ‘Trebuchet MS’, Helvetica, sans-serif');
	
	style = 'style="' + style.join(';') + '"';
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


function LGrid(cols, subs){
	this.elem = $('<table class="LBottomGrid"></table>');
	this.subs = subs;
	var blank = '<div style="color:red;">test</div>';
	if(this.subs.length == 0){
		this.subs = [new LBlank(blank)];
	}
	for(var i = 0; i < this.subs.length % cols; i++){
		this.subs.push(new LBlank(blank));
	}
	var rows = this.subs.length / cols;
	var count = 0;
	console.log(this.subs.length + ' = ' + rows + ' * ' + cols);
	for(var r = 0; r < rows; r++){
		var tr = $('<tr></tr>');
		for(var c = 0; c < cols; c++){
			var td = $('<td></td>');
			td.append(this.subs[count++].elem);
			tr.append(td);
		}
		this.elem.append(tr);
	}
};


function LLabel(w, h, x, y, t){
	var style = 'style="width:'+w+'%;height:'+h+'%;color:white;margin:1%;background-color:rgb(20, 20, 20);padding:1%;text-align:center;"';
	this.elem = $('<div '+style+'>'+t+'</div>');
};

function LBlank(inp){
	if(inp !== undefined)
		this.elem = $(inp);
	else this.elem = $('<div></div>');
};

function LButton(cl, t, cb){
	cl = 'LButtonStyle' + cl;
	this.elem = $('<div class="'+cl+'">'+t+'</div>');
	var e = this.elem;
	this.elem.mouseover(function(){e.css('background-color', 'rgb(41, 143, 204)');});
	this.elem.mouseout(function(){e.css('background-color', 'rgb(44, 44, 44)');});
	if(cb !== undefined) this.elem.click(cb);
};


function LOption(w, t, cb, endline){
	if(endline === undefined) endline = true;
	var divType = endline ? 'div' : 'span';
	var style = 'style="width:'+w+'%;height:10%;color:black;cursor:pointer;margin:1%;background-color:white;padding:.5%;text-align:center;"';
	this.elem = $('<'+divType+' '+style+'>'+t+'</'+divType+'>');
	var e = this.elem;
	this.elem.mouseover(function(){e.css('background-color', 'rgb(41, 143, 204)');});
	this.elem.mouseout(function(){e.css('background-color', 'rgb(255, 255, 255)');});
	var previouslyClicked = false;
	if(cb !== undefined) this.elem.click(function(){
		if(!previouslyClicked){
			previouslyClicked = true;
			cb();
		}
	});
};


function LMessage(t){
	this.t = t;
	this.type = 0;
}

function LAnswer(qs, cb, arg){
	this.qs = qs;
	this.cb = cb;
	this.arg = arg;
}


function LMessageSystem(type){
	var style = [];
	style.push('width:90%');
	style.push('height:76%');
	style.push('color:black');
	style.push('margin-left:auto');
	style.push('margin-right:auto');
	style.push('background-color:white');
	style.push('padding:1%');
	style = 'style="' + style.join(';') + '"';
	this.elem = $('<pre ' + style + '></pre>');
	this.messages = [];
	//state: 0 - needs new messages
	//state: 1 - processing message
	//state: 2 - displaying
}




function LTypeText2(w, h, t){
	this.t = t;
	var style = 'style="width:'+w+'%;height:'+h+'%;color:black;margin:1%;background-color:white;padding:1%; \
	"';
	this.elem = $('<pre ' + style + '></pre>');
	this.timer = null;
}


LTypeText2.prototype.begin = function(){
	var copyText = this.t.split('');
	var txt = '';
	if(this.timer != null){
		clearInterval(this.timer);
		this.timer = null;
	}
	var me = this;
	this.timer = setInterval(function(){
		if(copyText.length <= 0){
			me.end();
			return;
		}
		me.elem.html(txt);
		txt += copyText.shift();
	}, 30);
};



LTypeText2.prototype.end = function(){
	if(this.timer != null){
		clearInterval(this.timer);
		this.timer = null;
	}
	this.elem.html(this.t);
};
