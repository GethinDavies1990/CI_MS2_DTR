var settings = {
  url: "https://v3.football.api-sports.io/standings?league=39&season=2022",
  method: "GET",
  timeout: 0,
  headers: {
    "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

// Gets the team names using the getJSON method in jQuery, loops through each team and outputs to the console. 
$.ajax(settings).done(function getTeamName (league) {
    var standingsLength = league.response[0].league.standings[0].length;
    for (var i = 0; i < standingsLength; i++) {
      var teamName = league.response[0].league.standings[0][i].team.name;
      console.log(teamName);
    }
  });
