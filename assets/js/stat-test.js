    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b2f880e7ae15d7c6f8fa8a87b51b71aa',
            'X-RapidAPI-Host': 'v3.football.api-sports.io'
}
    }

$.getJSON("https://v3.football.api-sports.io/standings?league=39&season=2022",
    function (league) {
      console.log(league);
  
      $.each(data, function (index, value) {
        console.log(value);
  
        var name = value.user.name;
        var imageURL = value.urls.regular;
      });
    }
  );