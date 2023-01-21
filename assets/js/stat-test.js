var settings = {
  url: "https://v3.football.api-sports.io/standings?league=39&season=2022",
  method: "GET",
  timeout: 0,
  headers: {
    "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

// Gets the team names using the getJSON method in jQuery  
$.ajax(settings).done(function leagueData (league) {
    var standingsLength = league.response[0].league.standings[0].length;
    for (var i = 0; i < standingsLength; i++) {

      // loops through each team and outputs their rank to the console
      var teamRank = league.response[0].league.standings[0][i].rank;
      // console.log(teamRank);

      // loops through each team and outputs to the console
      var teamName = league.response[0].league.standings[0][i].team.name;
      // console.log(teamName);

      // Loops through the teams logo's
      var teamLogo = league.response[0].league.standings[0][i].team.logo;
      // console.log(teamLogo)

      // Loops through the teams and how many matches they have played
      var matchesPlayed = league.response[0].league.standings[0][i].all.played;
      // console.log(matchesPlayed)

      //  Loops through the teams and outputs their win tally to the console
      var teamWins = league.response[0].league.standings[0][i].all.win;
      // console.log(teamWins)

      //  Loops through the teams and outputs their draw tally to the console
      var teamDraw = league.response[0].league.standings[0][i].all.draw;
      // console.log(teamDraw)

      //  Loops through the teams and outputs their lose tally to the console
      var teamLoss = league.response[0].league.standings[0][i].all.lose;
      // console.log(teamLoss)

      //  Loops through the teams and outputs their goals for tally to the console
      var teamGoalsFor = league.response[0].league.standings[0][i].all.goals.for;
      console.log(teamGoalsFor)

      // //  Loops through the teams and outputs their win tally to the console
      // var teamGoalsAgainst = league.response[0].league.standings[0][i].all.played;
      // // console.log(matchesPlayed)

      // //  Loops through the teams and outputs their win tally to the console
      // var teamGoalDifference = league.response[0].league.standings[0][i].all.played;
      // // console.log(matchesPlayed)

      // //  Loops through the teams and outputs their win tally to the console
      // var teamPoints = league.response[0].league.standings[0][i].all.played;
      // // console.log(matchesPlayed)

      // //  Loops through the teams and outputs their win tally to the console
      // var teamForm = league.response[0].league.standings[0][i].all.played;
      // // console.log(matchesPlayed)












    }
  });
