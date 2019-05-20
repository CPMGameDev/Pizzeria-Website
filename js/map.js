function initMap() {
    var location = {lat: -27.4493499, lng: 152.9777008};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: location});

    var marker = new google.maps.Marker({position: location, map: map});
}  