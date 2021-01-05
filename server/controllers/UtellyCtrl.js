const axios = require('axios');
let dataArray = [];

module.exports = {
    getData: async (req, res) => {
        let { name } = req.params;
        let options = {
            method: 'GET',
            url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
            params: { term: name },
            headers: {
                'x-rapidapi-key': '014b2f48bbmshc6a7a1d333f57afp10c9c9jsna82def2f9af6',
                'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
            }
        };

        //console.log(res.data)

        let response = await axios.request(options)
        dataArray.push(response.data.results);
        //console.log(dataArray)
        res.status(200).send(dataArray);
    }
}

