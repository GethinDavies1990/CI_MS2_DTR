function fetchData() {
    fetch("https://app.sportdataapi.com/api/v1/soccer/standings?apikey=57e89040-96af-11ed-88ea-854864b3c3cd&season_id=496").then(response => {
        return response.json();
    }).then(standings => {
        console.log(standings.data)
    });
}

fetchData();

