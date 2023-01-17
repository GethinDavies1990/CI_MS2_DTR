function topGoalScorer(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=207&APIkey=4dc7334d95e72e4425145e1a6b33afaf7a41c8dd5765d736e958dfa001b13943");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

topGoalScorer(function(topGoalScorer) {
	console.log(topGoalScorer);
});