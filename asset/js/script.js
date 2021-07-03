   (function($){
          $(document).ready(function(){
              $(".navscroll").hide();
              $(function(){
                  $(window).scroll(function(){
                      if($(this).scrollTop()>150){
                          $('.navscroll').fadeIn(1000);
                      }else{
                          $('.navscroll').fadeOut(1000);
                      }
                  });
              });
          });
		  $(document).ready(function(){
			// some sample events
			$("#division-dhaka").click(function(){
				window.location.href="https://www.google.com/search?q=dhaka"
			})
			$("#division-chittagong").click(function(){
				window.location.href="https://www.google.com/search?q=chittagong"
			})
			$("#division-sylhet").click(function(){
				window.location.href="https://www.google.com/search?q=sylhet"
			})
			$("#division-khulna").click(function(){
				window.location.href="https://www.google.com/search?q=khulna"
			})
			$("#division-barishal").click(function(){
				window.location.href="https://www.google.com/search?q=barishal"
			})
			$("#division-rajshahi").click(function(){
				window.location.href="https://www.google.com/search?q=rajshahi"
			})
			$("#division-rangpur").click(function(){
				window.location.href="https://www.google.com/search?q=rangpur"
			})
		})
      }(jQuery));





