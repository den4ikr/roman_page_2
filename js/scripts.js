$(document).ready(function(){
	$(".slider").slick({
		centerMode:true,
		dots:true,
		variableWidth:true,
		
		responsive:[
			{
				breakpoint:767,
				settings: {
					arrows:false,
					slidesToShow:1,
					
				}
			},{
				breakpoint:397,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$(".wrapper").addClass("active");
	$(".header__burger-item").click(function(event){
		$(".header__list").toggleClass("active");
		$(".header__logo-item").toggleClass("active");
		$(".header__number").toggleClass("active");
		$("body").toggleClass("lock");
	})
})