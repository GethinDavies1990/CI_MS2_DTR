// API used to bring in the latest standings for the top goal scorers in the premier league, the api is limited to 100 requests a day
var settings = {
    url: "https://v3.football.api-sports.io/players/topscorers?season=2020&league=39",
    method: "GET",
    timeout: 0,
    headers: {
      "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };
  
  // Gets the top goal scorers of the premier league using the getJSON method in jQuery  
  $.ajax(settings).done(function leagueData (league) {
      
      };
    });