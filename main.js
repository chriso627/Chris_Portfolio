$(document).on("ready", function(){
	$('.js-menu').on('click', function(e){
		e.preventDefault();
		var subMenu = $(this).attr('href');
		//alert(subMenu);

		$(".sub-menu").slideUp();
		$(subMenu).slideToggle(1000);

		// change #js-main-img src attribute
		//var newImg = $(this).data('img');
		//update #js-main-image
		//$('#js-main-image').attr('src',newImg);//



	});
});