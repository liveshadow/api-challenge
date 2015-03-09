function listArtists() {
	var queryString = 'http://developer.echonest.com/api/v4/artist/top_hottt?api_key=' + echonest.api_key + '&format=json&results=1&start=0&bucket=hotttnesss'
	$.get(queryString, function(data) {
		var artists = data.response.artists;
		$.get("/api-challenge/contents/templates/artistList.jade", function(template) {
			var html = jade.render(template{items:artists})
			$('#list').html(html);
			showTrack(artists[0].name,artists[0].id)
		})
	})
}