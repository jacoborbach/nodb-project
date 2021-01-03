let data = require('../data.json'),
    watchedShows = [];
// id = 1;


module.exports = {
    getavailableShows: (req, res) => {
        res.status(200).send(data)
    },
    addwatchedShow: (req, res) => {
        const { show } = req.body;
        // show.idd = id;
        // id++;
        watchedShows.push(show);
        res.status(200).send(watchedShows);
    },
    editWatchedShow: (req, res) => {

    },
    deleteWatchedShow: (req, res) => {
        const { id } = req.params;

        const index = watchedShows.findIndex(element => element.id === +id);
        watchedShows.splice(index, 1);
        res.status(200).send(watchedShows);
    }
}