function initialize() {
	var myLatLng = {lat: 49.28367, lng: -123.09982};

    var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: myLatLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fit To A Tee</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fit To A Tee</b> is a Vancouver-based t-shirt company ' +
      'that makes limited edition, short run, one of a kind t-shirts.</p>' +
      '<div class="vcard">' +
      '<p class="fn"><a class="url" href="home.html">Fit To A Tee</a></p>' +
      '<p class="adr">'+
        '<span class="street-address">125 Main Street</span><br>' +
        '<span class="region">Vancouver, BC</span><br>' +
        '<span class="country-name">Canada</span><br>' +
        '<span class="postal-code">V9W 5O8</span><br>' +
      '</p>'+
      '</div>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  title: 'Fit To A Tee'
	});

	marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });
  }
  google.maps.event.addDomListener(window, 'load', initialize);