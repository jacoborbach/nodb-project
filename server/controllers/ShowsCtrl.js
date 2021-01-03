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
        const { id } = req.params,
            { name } = req.body;

        const show = watchedShows.find(element => element.id === +id)
        show.name = name;
        res.status(200).send(watchedShows);
    },
    deleteWatchedShow: (req, res) => {
        const { id } = req.params;

        const index = watchedShows.findIndex(element => element.id === +id);
        watchedShows.splice(index, 1);
        res.status(200).send(watchedShows);
    }
}