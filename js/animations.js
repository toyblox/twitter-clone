$(document).ready(function() {

$('#tweet-controls').hide();

$('.tweet-compose').on('click', function() {
	$(this).height($(this).height() *2);
	$('#tweet-controls').show();
})

$('.tweet-compose').keyup(function() {
	console.log('up');
		var count = 140-$('.tweet-compose').val().length;
		$('#char-count').html(count);
		if (count < 10) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').css('color', 'inherit');
		}
		if (count == 140 || count < 0) {
			$('#tweet-controls button').prop('disabled', true);
		}
		else {
			$('#tweet-controls button').prop('disabled', false);
		}

	})

$('#tweet-controls button').click(function() {
	var el = $('.tweet:first').clone();
		el.find('.fullname').html('alicia');
		el.find('.username').html('@alicia');
		el.find('.tweet-text').html($('.tweet-compose').val());
		$('#stream').prepend(el);
})




});