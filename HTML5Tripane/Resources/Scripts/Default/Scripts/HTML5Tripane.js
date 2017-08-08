    $(document).ready(function(){
       $("div#header>a").attr({href: "http://www.worldpay.com"});   
    });


/* This adds a link to the skin.css file - Content/Resources/Styleheets/TripaneskinStyles.css */
$('<link>')
	.appendTo($('head'))
	.attr({type: 'text/css', rel: 'stylesheet'})
	.attr('href', 'content/resources/stylesheets/tripaneskinstyles.css');

// Google Tag Manager
(function(w, d, s, l, i){w[l] = w[l] || [];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l:'';j.async = true;j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-MHWK24J');