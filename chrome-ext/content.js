$(document).ready(function(){
	$('body').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
	$('.panel-reading').each(function(){
			$(this).css('-webkit-user-select', 'text');
			$(this).css('-moz-user-select', 'text');
			$(this).css('-ms-user-select', 'text');
			$(this).css('-k-html-user-select', 'text');
			$(this).css('user-select', 'text');
		});
	});
})