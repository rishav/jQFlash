	jQuery.fn.flash = function() {
		return this.each( function() {
			var $this = jQuery(this)
			$this.hide();
			$this.css({"top":"0px","width":"100%","left":"0px","position":"fixed","z-index":100,"text-align":"center"})
			$this.append("(Click To hide)")
			$this.slideToggle();
			$this.click(function(){
				$this.slideToggle()
			})
		})
	}
