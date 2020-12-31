const watchedShows = [];
const id = 1;

let data = require('../data.json');

module.exports = {
    getavailableShows: (req, res) => {
        res.status(200).send(data)
    },
    addwatchedShow: (req, res) => {

    },
    editWatchedShow: (req, res) => {

    },
    deleteWatchedShow: (req, res) => {

    }
}