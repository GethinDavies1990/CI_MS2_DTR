// API used to bring in the latest standings for the top goal scorers in the premier league, the api is limited to 100 requests a day
var settings2 = {
  url: "https://v3.football.api-sports.io/players/topscorers?season=2020&league=39",
  method: "GET",
  timeout: 0,
  headers: {
    "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

// Gets the top goal scorers of the premier league using the getJSON method in jQuery
$.ajax(settings2).done(function scorereData(topScorer) {
  var players = topScorer.response;
  for (var i = 0; i < players.length; i++) {
    
    // loops through player and outputs their photo
    var playerPhoto = players[i].player.photo;
    // console.log(playerPhoto);

    // loops through player and outputs their name
    var playerName = players[i].player.name;
    // console.log(playerName);

    // loops through player and outputs their clubs logo
    var clubName = players[i].statistics[0].team.logo;
    // console.log(clubName);

    // loops through player and outputs their goal tally
    var playerGoal = players[i].statistics[0].goals.total;
    // console.log(playerGoal);

    // loops through player and outputs their goal tally
    var playerAssists = players[i].statistics[0].goals.assists;
    // console.log(playerAssists);

  }
});
