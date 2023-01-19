$.getJSON(
  "https://api.unsplash.com/users/brianhaferkamp/photos/?client_id=PFArrh-ILrPosvCml41PMDEjSlXGjJdpvjHPH76OLxA",
  function (data) {
    console.log(data);

    $.each(data, function (index, value) {
      console.log(value);

      var name = value.user.name;
      var bio = value.user.bio;
      var imageURL = value.urls.regular;

    //   $('.name').text(name);
    //   $('.bio').text(bio);
    //   $('.image img').attr('src', imageURL);

      $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL  + '"></div>');
    });
  }
);

/* Access key PFArrh-ILrPosvCml41PMDEjSlXGjJdpvjHPH76OLxA */
