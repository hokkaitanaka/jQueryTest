$(function(){
	var interval = 1500;
	$('#eyecatch').each(function(){
		var container = $(this);
		function switchEyecatch(){
			var eyecatches = container.find('img');
			var first = eyecatches.eq(0);
			var second = eyecatches.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		setInterval(switchEyecatch, interval);
	});
});
