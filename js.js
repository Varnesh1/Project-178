let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3lhYW5lbmRyYSIsImEiOiJjbDZ1NXBlbHYwNndyM2JucmxsZmpjNXluIn0.2PehXQ2arEeFYYNWs4WXPQ';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var img2 = document.querySelector("#gateway")


var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);



var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


var img4 = document.querySelector("#lotus")


var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);



var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);