
var hideItems = 0;
function hideItemF() {
	$('.nkh-grid-item').each(function(){
		$('.nkh-grid-item-img-replacement', this).fadeOut(250, function(){
			$(this).remove();
		});
	});
}

$('.nkh-grid-item').hover(
  function(){
		var imgSetId = $(this).attr('data-grid-image-prefix');

		if(hideItems) {
			clearTimeout(hideItems);
		}

		$('.nkh-grid-item').each(function(step){
			var par = $(this);

			if(step == 0) {
				bgPos = 'top left';
			} else if(step == 1) {
				bgPos = 'top right';
			} else if(step == 2) {
				bgPos = 'bottom left';
			} else if(step == 3) {
				bgPos = 'center right';
			} else if(step == 4) {
				bgPos = 'bottom center';
			} else if(step == 5) {
				bgPos = 'bottom right';
			}

			$('<img/>').addClass('nkh-grid-item-img-replacement').attr({ src: '//nikonusa.com/en_US/IMG/Images/CPCAssets/homepage/img/grid/' + imgSetId + '-full.jpg'}).appendTo($('.nkh-grid-item-media', $(par))).delay(step * 100).fadeIn(250);

		});

	},
	function(){
		hideItems = setTimeout(hideItemF, 350);
	});

$('.nkh-grid-item').click(function(){
	var gridItemId = $(this).attr('data-grid-item-id');
	var gridHref = $(this).attr('data-grid-href');
	s.linkTrackVars = 'prop19,eVar32,events';
	s.linkTrackEvents = s.events = 'event47';
	s.prop19 = s.eVar32 = 'mid-page-banner>' + gridItemId;
	s.tl(this, 'o', 'Home Page â€“ Mid-Page Banner');
	s.linkTrackEvents = s.linkTrackVars = 'None';
	if($(this).hasClass('nkh-new-win')) {
		window.open(gridHref);
	} else {
		window.location = gridHref;
	}
});
