// Jquery/AJAX used to connect with unsplash API, youtube videos were consumed to achieve the result. 
// the api, connects with my own unsplash account and a collection that was made
$.getJSON(
  "https://api.unsplash.com/collections/6OtMro9rAxs/photos/?client_id=PFArrh-ILrPosvCml41PMDEjSlXGjJdpvjHPH76OLxA",
  function (data) {
    console.log(data);

    $.each(data, function (index, value) {
      console.log(value);

      var name = value.user.name;
      var imageURL = value.urls.regular;

      $('.photo-api-container').append('<h4 class="photo-owner">' + name + '</h4><div class="image-api"><img src="' + imageURL  + '"></div>');
    });
  }
);

