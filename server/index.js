const express = require('express'),
    ctrl = require('./controllers/ShowsCtrl'),
    port = 3002,
    app = express();

app.use(express.json());

app.get('/api/available-shows', ctrl.getavailableShows);
// app.get('/api/watched-shows', ctrl.getWatchedShows);
app.post('/api/available-shows', ctrl.addwatchedShow)
app.delete('/api/available-shows/:id', ctrl.deleteWatchedShow)


app.listen(port, () => console.log(`Your port is running on ${port}`))