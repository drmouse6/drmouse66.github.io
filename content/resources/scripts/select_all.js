//Code select function
 
         			function select_all(el) {
				if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
				var range = document.createRange();
				range.selectNodeContents(el);
				var sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				} else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
				var textRange = document.body.createTextRange();
				textRange.moveToElementText(el);
				textRange.select();
				}
				}

//Back to top function
$(document).ready(function(){
	
		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});
	
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
				$('html, body').animate({scrollTop: 0}, 800);
				return false;
			});
	
	});
