$(document).ready(function(){

	current = 0;
	$('.next').on('click', function () {

		if (current < 5) {
			current++;
		} else {
			current=0;
		}

		$('.step .info').eq(current - 1).removeClass('active');
		$('.step .bullet').eq(current - 1).removeClass('active');
		$('.step .info').eq(current).addClass('active');
		$('.step .bullet').eq(current).addClass('active');

		$('.bar').eq(current + 1).addClass('active');
	})

	$('.prev').on('click', function () {

		if (current >= 0) {
			current--;
		} else {
			current = 5
		}

		$('.step .info').eq(current + 1).removeClass('active');
		$('.step .bullet').eq(current + 1).removeClass('active');

		$('.step .info').eq(current).addClass('active');
		$('.step .bullet').eq(current).addClass('active');

		$('.bar').eq(current - 1).removeClass('active');
	})

});