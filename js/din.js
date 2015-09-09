$(document).ready(escribir);
	function escribir(){
		$("#typed").typed({
			strings: ["el sitio más fácil para preparar reuniones."],
			typeSpeed: 50,	
		})	
   		var menu = 0;
		
		$(".menu-movil").on('click',function(){
			$(".header").toggle('slow');
			$(".header").css("display","block");
			$(".menu").css("display","block");
			
		});

	}




