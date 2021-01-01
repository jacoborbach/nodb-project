const watchedShows = [];
const id = 1;

let data = require('../data.json');

module.exports = {
    getavailableShows: (req, res) => {
        res.status(200).send(data)
    },
    // getWatchedShows: (req, res) => {
    //     res.status(200).send(watchedShows)
    // },
    addwatchedShow: (req, res) => {
        const { show } = req.body;
        // show.id = id;
        // id++;

        watchedShows.push(show);
        res.status(200).send(watchedShows);
    },
    editWatchedShow: (req, res) => {

    },
    deleteWatchedShow: (req, res) => {

    }
}