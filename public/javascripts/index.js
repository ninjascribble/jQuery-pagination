;(function($) {

	var paged_items_container = $('#items').css({ opacity: 0, height: 760, overflow: 'hidden' })
	  , paged_items_controls = $('#controls')
	  , paged_items = $('#items ul').pagination({
			pp: 12,
			before_change: beforePageChange,
			after_change: afterPageChange
		});

/*============================================
 * Event binding
 *==========================================*/
	paged_items_controls
		.on('click', 'button.prev', function() { navigateTo('previous'); })
		.on('click', 'button.next', function() { navigateTo('next'); })
		.on('click', 'a', function() { navigateTo(this.text); })

	paged_items
		.on('page-changed', onPageChanged)
		.on('page-out-of-bounds', onPageOutOfBounds);

/*============================================
 * Messy initialization
 *==========================================*/
	var nav = $('<ul/>'),
		stats = paged_items.pagination('status');

	for (var i = 0; i < stats.num_pages; i++) {
		var model = {
			n: i + 1,
			classname: function() {
				return (stats.page == i + 1) ? ' class="current"' : '';
			}
		};
		nav.append( Mustache.to_html('<li{{classname}}><a href="#{{n}}">{{n}}</a></li>', model) );
	}

	paged_items_controls.append(nav);

/*============================================
 * Methods
 *==========================================*/
	function navigateTo(n) {
		paged_items.pagination(n);
	}

	function beforePageChange(callback, context) {
		paged_items_container.animate({ opacity: 0 }, function() {
			callback.call(context);
		});
	}

	function afterPageChange(callback, context) {
		paged_items_container.animate({ opacity: 1 }, function() {
			callback.call(context);
		});
	}

	function onPageChanged(e) {
		nav.children('li')
			.removeClass('current')
			.eq(e.page - 1).addClass('current');
	}

	function onPageOutOfBounds(e) {
		console.log(e.type, e.requested_page, e);
	}

}(jQuery));