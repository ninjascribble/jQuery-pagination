/*
 * GET home page.
 */

// $('.dribbble-img img').each(function(i, el) { console.log($(el).attr('src')); });
var dimsum = require('dimsum')
  , sources = [
	'http://dribbble.s3.amazonaws.com/users/44126/screenshots/694516/dribbble_shot_1.3_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/3820/screenshots/694518/prince_ink_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/1528/screenshots/694652/travelshot_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/45889/screenshots/695458/nasa_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/101659/screenshots/694514/a__teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/36837/screenshots/694593/email_card_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/23123/screenshots/694488/mypaint_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/5146/screenshots/695160/madridmap_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/21747/screenshots/695056/elegantissima_dribbble_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/46089/screenshots/694737/time_machine_dribble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/17619/screenshots/694659/untitled-2_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/76269/screenshots/694735/camera_5d_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/4291/screenshots/694956/screen_shot_2012-08-20_at_10.47.25_am_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/40016/screenshots/694939/riderecon-icons_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/54963/screenshots/694651/dribbbble_woundplast_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/96387/screenshots/694724/vimeo2_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/14268/screenshots/695377/sidemenu_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/104314/screenshots/694486/clip_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/10244/screenshots/694736/skype_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/4094/screenshots/694983/drib82_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/149450/screenshots/694938/dribbble1_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/1571/screenshots/694964/screen_shot_2012-08-20_at_9.51.14_am_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/1930/screenshots/694802/haus_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/23569/screenshots/694903/yellow_brick_scrapped_concept_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/138939/screenshots/694561/mars_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/11867/screenshots/695268/1212ssss_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/784/screenshots/695738/vader_dribbble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/58309/screenshots/695229/skratchdrib_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/4076/screenshots/694444/narrowdesign_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/28943/screenshots/694504/icon-preview_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/14268/screenshots/694963/close-timeline_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/58866/screenshots/694993/all_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/44434/screenshots/694588/parmentier-sketch_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/3021/screenshots/694753/dribbble_03_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/51135/screenshots/695450/dt1987_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/51807/screenshots/695156/dribbble_apron_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/627/screenshots/695150/helpinkdrbl_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/11380/screenshots/694713/s_crest_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/3820/screenshots/694523/play_la_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/40016/screenshots/695298/riderecon-icons-finalised_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/31847/screenshots/695222/spas-12-dribbble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/41613/screenshots/694923/retro_player_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/22069/screenshots/695376/fcf_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/2738/screenshots/695276/shark-bait-hoo-haha_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/5502/screenshots/695259/cranked_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/59947/screenshots/694716/wurm_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/72241/screenshots/694689/p_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/16047/screenshots/695108/sfo_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/5494/screenshots/695399/map_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/15290/screenshots/694535/gryphon-vector_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/4368/screenshots/694492/skywatcher_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/35129/screenshots/695089/komets_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/9691/screenshots/694995/shopping-cart_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/150762/screenshots/694587/matilde_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/973/screenshots/695028/limited_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/4754/screenshots/695580/statigram-dribbble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/20427/screenshots/694671/4dribbble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/65963/screenshots/694958/findyourmatch_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/67829/screenshots/694542/agro-livestock_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/3007/screenshots/694953/screen_shot_2012-08-20_at_10.46.14_am_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/49396/screenshots/694565/green-energy-icons_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/203/screenshots/695006/dribbble.seizure_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/11/screenshots/695390/bike_teaser.gif',
	'http://dribbble.s3.amazonaws.com/users/78065/screenshots/694681/sssssss_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/42095/screenshots/695198/smaller-better_teaser.gif',
	'http://dribbble.s3.amazonaws.com/users/11/screenshots/695390/bike_teaser.gif',
	'http://dribbble.s3.amazonaws.com/users/56089/screenshots/694917/coffeecar3_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/23375/screenshots/694914/japan_dribbble_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/5568/screenshots/694509/16px_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/2733/screenshots/695157/dribbblebird_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/3281/screenshots/695248/untitled-1_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/10888/screenshots/695441/baselime_fun_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/78594/screenshots/694794/bo_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/25906/screenshots/694960/svla_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/106718/screenshots/695044/stuntplane_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/15290/screenshots/694533/gryphon-sketch_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/5340/screenshots/695063/am-dribbble_teaser.jpg',
	'http://dribbble.s3.amazonaws.com/users/3167/screenshots/694679/poolsafety-dribbble_teaser.png',
	'http://dribbble.s3.amazonaws.com/users/74401/screenshots/694607/oh-my-deer__teaser.png',
]

exports.index = function(req, res){

	var items = [];

	for (var i = 0; i < sources.length; i++) {
		items.push(createDataObject(i, sources[i]));
	}

	res.render('index', {
		title: 'Express',
		items: items,
		items_as_string: JSON.stringify(items)
	});
};

function createDataObject(i, src) {
	return {
		"image_src":		src,
		"header_text":		'Item Number ' + i,
		"descriptive_text":	dimsum.sentence() 
	}
}