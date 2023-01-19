$.getJSON(
  "https://api.unsplash.com/users/brianhaferkamp/photos/?client_id=PFArrh-ILrPosvCml41PMDEjSlXGjJdpvjHPH76OLxA",
  function (data) {
    console.log(data);

    $.each(data, function (index, value) {
      console.log(value);

      var name = value.user.name;
      var bio = value.user.bio;
      var imageURL = value.urls.regular;
    });
  }
);

/* Access key PFArrh-ILrPosvCml41PMDEjSlXGjJdpvjHPH76OLxA */
