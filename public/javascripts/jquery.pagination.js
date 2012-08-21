;(function($) {

	var defaults = {
		pp: 8,
		before_change: noop,
		after_change: noop
	};

	$.fn.extend({ pagination: function(opts) {
		if ($.isPlainObject(opts)) {
			init.call(this, opts);	
		}
		else {
			switch(opts) {
				case 'next':
					showPage.call(this, this.page + 1);
					break;
				case 'previous':
					showPage.call(this, this.page - 1);
					break;
				case 'status':
					return getStatus.call(this);
				default:
					showPage.call(this, Number(opts));
					break;
			}
		}
		return this;
	}});

	function init(opts) {
		this.opts = $.extend({}, defaults, opts);
		this.items = this.children('li');
		this.num_pages = Math.ceil(this.items.length / this.opts.pp);
		showPage.call(this, 1);
	}

	function showPage(n) {

		if (n <= 0 || n > this.num_pages) {
			triggerEvent.call(this, 'page-out-of-bounds', { requested_page: n });
			return false;
		}

		this.opts.before_change(function() {

			var page = this.page = (n || 1)
			  , range = [(this.opts.pp * this.page) - this.opts.pp, this.opts.pp * this.page];

			this.items.hide().each(function(i, el) {
				if (i >= range[0] && i < range[1]) {
					$(el).show();
				}
			});

			triggerEvent.call(this, 'page-changed');
			
			this.opts.after_change(noop, this);

		}, this);

	}

	function getStatus() {
		return {
			page: this.page,
			num_pages: this.num_pages
		}
	}

	function triggerEvent(type, more) {
		this.trigger($.extend({ type: type }, getStatus.call(this), more));
	}

	function noop(callback, context) {
		if($.isFunction(callback)) {
			callback.call(context);
		}
	}

}(jQuery));