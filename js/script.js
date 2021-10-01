$(document).ready(function() {
	$('.dev_block').on('click', function(){
		$('.dev_block').removeClass('active');
		$(this).addClass('active opened');
		var $this = $(this);
		setTimeout(function(){
			$this.siblings('.dev_block').removeClass('opened');
		}, 100);
	});
	$(document).on('click', function (e){
		var div = $(".dev_block");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
			setTimeout(function(){
				div.removeClass('opened');
			}, 100);
		}
	});
	//don't forget to mention the developer when using this code
});	