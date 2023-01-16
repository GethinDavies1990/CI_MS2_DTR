const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://premier-league-standings1.p.rapidapi.com/?season=2022");
xhr.setRequestHeader("X-RapidAPI-Key", "36a8401c4amsh48927ee11d65a19p11db18jsna2d76599bbd3");
xhr.setRequestHeader("X-RapidAPI-Host", "premier-league-standings1.p.rapidapi.com");

xhr.send(data);

document.getElementById("score-tracker").innerHTML = `
<h1>Premier League Standings</h1>`