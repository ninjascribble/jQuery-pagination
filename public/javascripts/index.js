;(function($) {

	var paged_items_container = $('#items').css({ opacity: 0, height: 760, overflow: 'hidden' })
	  , paged_items_controls = $('#controls')
	  , paged_items = $('#items ul').pagination({
			pp: 12,
			before_change: beforePageChange,
			after_change: afterPageChange
		});

	paged_items_controls
		.on('click', 'button.prev', function() { navigateTo('previous'); })
		.on('click', 'button.next', function() { navigateTo('next'); });

	paged_items
		.on('page-out-of-bounds', onPageOutOfBounds);

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

	function onPageOutOfBounds(e) {
		console.log(e.type, e.requested_page, e);
	}

}(jQuery));