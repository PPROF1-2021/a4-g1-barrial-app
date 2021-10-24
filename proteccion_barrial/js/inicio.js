<script>

    function initMap() {
      var macc = {lat: 42.1382114, lng: -71.5212585};
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: macc});
      var marker = new google.maps.Marker({position: macc, map: map});
    }

 </script>
