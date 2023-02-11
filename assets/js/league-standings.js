/**
 * API used to bring in the latest standings for the premier league, the api is limited to 100 requests a day
 * settings, are the parameters required to fetch the data from the API-football
 * followed the API documentation to see how to implement the settings into my code
 */
var settings = {
  url: "https://v3.football.api-sports.io/standings?league=39&season=2022",
  method: "GET",
  timeout: 0,
  headers: {
    "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  error: function(xhr, status, err) {
    // Log an error to the console if the request is not successful
    console.log(err);
  }
};

/**
 * GetJSON method was used to fetch the data from the API-Sports
 * I followed the documentation on the API-sports website to see how to fetch the data correctly,
 * and also checked back on the API module on the code institutes learning platform.
 * teamRank loops through each team and outputs their rank to the console.
 * teamName loops through each team and output their name to the console.
 * teamLogo loops through each team logo and outputs to the console.
 * matchesPlayed Loops through the teams and how many matches they have played.
 * teamWins Loops through the teams and outputs their win tally to the console.
 * teamDraw Loops through the teams and outputs their draw tally to the console.
 * teamLoss Loops through the teams and outputs their lose tally to the console.
 * teamGoalsFor Loops through the teams and outputs their goals for tally to the console.
 * teamGoalsAgainst Loops through the teams and outputs their goals against tally to the console.
 * teamGoalDifference Loops through the teams and outputs their goals diff tally to the console.
 * teamPoints Loops through the teams and outputs their points tally to the console.
 * teamForm Loops through the teams and outputs their current form to the console.
 * @param league [the premier league data]
 * @param settings [url, headers needed for API]
 */
$.ajax(settings).done(function leagueData(league) {
  var standingsLength = league.response[0].league.standings[0].length;
  for (var i = 0; i < standingsLength; i++) {
    var teamRank = league.response[0].league.standings[0][i].rank;
    var teamName = league.response[0].league.standings[0][i].team.name;
    var teamLogo = league.response[0].league.standings[0][i].team.logo;
    var matchesPlayed = league.response[0].league.standings[0][i].all.played;
    var teamWins = league.response[0].league.standings[0][i].all.win;
    var teamDraw = league.response[0].league.standings[0][i].all.draw;
    var teamLoss = league.response[0].league.standings[0][i].all.lose;
    var teamGoalsFor = league.response[0].league.standings[0][i].all.goals.for;
    var teamGoalsAgainst = league.response[0].league.standings[0][i].all.goals.against;
    var teamGoalDifference = league.response[0].league.standings[0][i].goalsDiff;
    var teamPoints = league.response[0].league.standings[0][i].points;
    var teamForm = league.response[0].league.standings[0][i].form;

    /**
     * inputs League standings data into a HTML table using template literals,
     *  the class of 'mob-hide' was added to less important data to help improve responsiveness on mobile
     */
    $("#standings-table tbody").append(`<tr><td>${teamRank}</td>
      <td><img class='team-logo' alt='${teamName} club crest' src='${teamLogo}'>${teamName}</td>
      <td class="mob-hide">${matchesPlayed}</td>
      <td>${teamWins}</td>
      <td>${teamDraw}</td>
      <td>${teamLoss}</td>
      <td class="mob-hide">${teamGoalsFor}</td>
      <td class="mob-hide">${teamGoalsAgainst}</td>
      <td class="mob-hide">${teamGoalDifference}</td>
      <td>${teamPoints}</td>
      <td class="mob-hide">${teamForm}</td></tr>`);
  }
});
