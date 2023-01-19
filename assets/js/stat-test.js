function fetchLeague() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b2f880e7ae15d7c6f8fa8a87b51b71aa',
            'X-RapidAPI-Host': 'v3.football.api-sports.io'
        }
    };
    
    fetch('https://v3.football.api-sports.io/standings?league=39&season=2022', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
}
fetchLeague()
