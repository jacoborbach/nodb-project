let data = require('../data.json'),
    watchedShows = [],
    id = 1;

module.exports = {
    getavailableShows: (req, res) => {
        res.status(200).send(data)
    },
    addwatchedShow: (req, res) => {
        let { show } = req.body;
        show.id = id;
        id++;
        watchedShows.push(show);
        //console.log(watchedShows)
        res.status(200).send(watchedShows);
    },
    editWatchedShow: (req, res) => {
        const { id } = req.params,
            { rating } = req.body;

        const show = watchedShows.find(element => element.id === +id)
        show.rating = rating;
        // console.log(show.rating)
        res.status(200).send(watchedShows);
    },
    deleteWatchedShow: (req, res) => {
        const { id } = req.params;

        const index = watchedShows.findIndex(element => element.id === +id);
        watchedShows.splice(index, 1);
        res.status(200).send(watchedShows);
    },
    clearWatchedShow: (req, res) => {
        watchedShows = []
        res.status(200).send(watchedShows);
    }
}