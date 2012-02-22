jQuery.fn.flash = function(options) {
	return this.each( function() {
		var $this = jQuery(this)
		$this.hide();
		var defaults = {
			css:{"top":"0px","z-index":100,"text-align":"center", 'position':'relative', 'padding':'5px'},
			parent_css:{"width":"100%","position":"absolute"},
			message: "(Click To hide)",
			hideEvent:"click"
		}

		var css = defaults['css']
		if(options != null) {
		 	css = jQuery.extend(css, options['css'])
			var opts = jQuery.extend(defaults, options)
		}
		else
		 	var opts = defaults
		$this.parent().css(defaults.parent_css)
		$this.css(css);
		$this.append(opts["message"])
		$this.slideToggle();
		$this.bind(opts["hideEvent"],function(){
			$this.parent().slideToggle()
		})
		setTimeout(function() {
			$this.fadeOut(2000, function() {
				$(this).parent().hide()
			});
		}, 4000)
	})
}