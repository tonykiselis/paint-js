var Program = function () {
	this.pen = new Pen();
	this.canvas = new Blank(this.pen);
}

Program.prototype.start = function () {
	$('.pen-color').on('click', this.onClickPenColor.bind(this))
	$('#mySelect').on('click', this.selectWidth.bind(this))
}

Program.prototype.onClickPenColor = function(event) {

	var color = $(event.toElement).data('color');
	this.pen.setColor(color);
}

Program.prototype.selectWidth = function(event) {

	var width = parseInt($(event.toElement).val());
	this.pen.setWidth(width);
}