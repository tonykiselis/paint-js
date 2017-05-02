var Pen = function () {
	this.color = 'rgb(100,100,100)';
	this.lineWidth = 1;
}

Pen.prototype.setColor = function(color){
	this.color = color;
	console.log(this);
}

Pen.prototype.setWidth = function(width){
	this.lineWidth = width;
	console.log(this);
}

// Pen.prototype.configure = function(cntxt) {
// 	this.cntxt.strokeStyle = this.color;
// 	this.cntxt.lineWidth = this.size;

// }