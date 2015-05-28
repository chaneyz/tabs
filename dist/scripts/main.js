$(document).on('ready', function(e) {

	var $targetSection = $(window.location.hash);
	if(!$targetSection.length) {
		$targetSection = $('main section').eq(0);
	}
	$targetSection.show();

	$('nav a[href="#' +$targetSection.attr('id')+'"]').addClass('active');

	$('nav').on('click', function(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();


		$('nav a').removeClass('active');
		$target.addClass('active');

	});
});