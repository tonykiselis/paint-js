$(document).ready(function() {
	magicalBlank = new Program();
	magicalBlank.start();

	for(var i = 1; i < 51; i++) {
		 $('#mySelect')
         .append($("<option> </option>")
                    .attr("value", i)
                    .text(i)); 
	}	
})



	$('#log').click(function() {
		console.log(Pen);
		console.log(magicalBlank);
	});
