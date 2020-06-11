$(function(){
	
	
	$(".nav-item a.nav-link, .navbar-brand, .btn-work").click(function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop:$(gato).offset().top
			}, 800, function(){
				window.location.hash = gato;
			});
		}
	});

	
	$('.nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

	s
	$(function () {
		$('[data-toggle="popover"]').popover()
	})

});

