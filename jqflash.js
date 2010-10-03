	jQuery.fn.flash = function(options) {
		return this.each( function() {
			var $this = jQuery(this)
			$this.hide();
			var defaults = {
				css :{	"top":"0px","width":"100%","left":"0px","position":"fixed","z-index":100,"text-align":"center"},
				message: "(Click To hide)",
				hideEvent:"click"
			}
			if(options != null)
				var opts = jQuery.extend(defaults, options)
			else
			 	var opts = defaults
			$this.css(opts["css"])
			$this.append(opts["message"])
			$this.slideToggle();
			$this.bind(opts["hideEvent"],function(){
				$this.slideToggle()
			})
		})
	}
