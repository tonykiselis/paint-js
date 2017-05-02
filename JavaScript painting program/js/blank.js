var Blank = function (pen) {
	myBoard = this;
	this.canvas = document.getElementById('blank');
	this.cntxt = this.canvas.getContext('2d');
	this.currentLocation;
	this.isDrawing = false;
	this.pen = pen;
	console.log(this.cntxt);
	

	this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
	this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
	this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
	this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
	document.getElementById("download").addEventListener('click', function() {
		this.href = myBoard.canvas.toDataURL();
    	this.download = "drawing.png";
    	});
    document.getElementById("clear").addEventListener('click', this.onClear.bind(this));
}

Blank.prototype.onClear = function (event) {
	this.cntxt.clearRect(0,0,700,400);
}

Blank.prototype.onMouseDown = function (event) {
	endX = event.layerX;
	endY = event.layerY;
	this.isDrawing = true;
}

Blank.prototype.onMouseMove = function (event) {
	if(this.isDrawing) {

		this.cntxt.beginPath();
		this.cntxt.moveTo(endX, endY);
		this.cntxt.lineTo(event.layerX, event.layerY);

		endX = event.layerX;
		endY = event.layerY;
		
		this.cntxt.strokeStyle = this.pen.color;
		this.cntxt.lineWidth = this.pen.lineWidth;
		this.cntxt.stroke();
	}
}

Blank.prototype.onMouseUp = function (event) {
	this.isDrawing = false;
}

Blank.prototype.onMouseLeave = function (event) {
	this.isDrawing = false;
}

Blank.prototype.clear = function (event) {
	this.cntxt.clear();
}