function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://app.sportdataapi.com/api/v1/soccer/standings?apikey=57e89040-96af-11ed-88ea-854864b3c3cd&season_id=496")
  xhr.send();

  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          cb(JSON.parse(this.responseText));
      }
  };
}

function printDataToConsole(data) {
  console.log(data);
}

getData(printDataToConsole);

document.getElementById('league-standings').innerHTML = `<h1>Hey${data.length}</h1>`
