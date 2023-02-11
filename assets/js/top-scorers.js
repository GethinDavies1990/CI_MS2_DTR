/**
 * API used to bring in the latest standings for the premier league, the api is limited to 100 requests a day
 * settings, are the parameters required to fetch the data from the API-football
 * followed the API documentation to see how to implement the settings into my code
 */
var settings2 = {
  url: "https://v3.football.api-sports.io/players/topscorers?season=2022&league=39",
  method: "GET",
  timeout: 0,
  headers: {
    "x-rapidapi-key": "b2f880e7ae15d7c6f8fa8a87b51b71aa",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

/**
 * GetJSON method was used to fetch the data from the API-Sports
 * I followed the documentation on the API-sports website to see how to fetch the data correctly,
 * Gets the top goal scorers of the premier league using the getJSON method in jQuery
 * and also checked back on the API module on the code institutes learning platform.
 * playerPhoto loops through player and outputs their photo
 * playerName loops through player and outputs their name
 * teamLogo loops through player and outputs their clubs logo
 * playerGoal loops through player and outputs their goal tally
 * playerAssists loops through player and outputs their assists tally
 * @param settings2 [url, headers for API]
 */
$.ajax(settings2).done(function scorereData(topScorer) {
  var players = topScorer.response;
  for (var i = 0; i < players.length; i++) {
    var playerPhoto = players[i].player.photo;
    var playerName = players[i].player.name; 
    var teamLogo = players[i].statistics[0].team.logo;
    var playerGoal = players[i].statistics[0].goals.total;
    var playerAssists = players[i].statistics[0].goals.assists;

    /**
     * inputs top goal scorer data into a HTML table using template literals,
     *  the class of 'mob-hide' was added to less important data to help improve responsiveness on mobile
     */
    $("#scorer-table tbody").append(`<tr>
    <td><img class='player-photo' alt='${playerName} profile picture' src='${playerPhoto}'> ${playerName}</td>
    <td><img class='team-logo text-centre' alt='${teamLogo} crest badge' src='${teamLogo}'></td>
    <td class="text-centre">${playerGoal}</td>
    <td class="text-centre">${playerAssists}</td>
    </tr>`);
  }
});
