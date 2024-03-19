$(document).ready(function() {
 

	$("#stream1_btn").on(function() {
		//$(".stream1").show('');
		$(".stream1").show('slow');
		//$(".stream1").show('medium');
		//$(".stream1").show('fast');
		//$(".stream1").show('1000');
	   
   });
	
	
	
	
	//$("#stream1_btn").on("click", function() {
 	//	$(".stream1").removeClass('highlight_stream');
	//	$(".stream2").removeClass('highlight_stream');
	//	$(".stream3").removeClass('highlight_stream');
	//  	$(".stream1").addClass('highlight_stream');
	//});



	// Above, can also use $("#stream1_btn").click(function()
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
