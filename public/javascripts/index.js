;(function($) {

	var paged_items_container = $('#items').css({ opacity: 0, overflow: 'hidden' })
	  , paged_items_controls = $('#controls')
	  , paged_items = $('#items ul').pagination({
			pp: 12,
			before_change: beforePageChange,
			after_change: afterPageChange
		})
	  , paged_items_navigation = paged_items.pagination('get_navigation');

/*============================================
 * Implementation logic
 *==========================================*/
	paged_items_controls
		.on('click', 'button.prev', function() { navigateTo('previous'); })
		.on('click', 'button.next', function() { navigateTo('next'); })
		.on('click', 'a', function() { navigateTo(this.text); })
		.append(paged_items_navigation);

	paged_items
		.on('page-changed', onPageChanged)
		.on('page-out-of-bounds', onPageOutOfBounds);

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
		paged_items_navigation.children('li')
			.removeClass('current')
			.eq(e.page - 1)
				.addClass('current');
	}

	function onPageOutOfBounds(e) {
		console.log(e.type, e.requested_page, e);
	}

}(jQuery));