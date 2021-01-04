const express = require('express'),
    ctrl = require('./controllers/ShowsCtrl'),
    port = 3002,
    app = express(),
    utellyctrl = require('./controllers/UtellyCtrl')

app.use(express.json());

app.get('/api/available-shows', ctrl.getavailableShows);
app.post('/api/available-shows', ctrl.addwatchedShow);
app.put('/api/available-shows/:id', ctrl.editWatchedShow);
app.delete('/api/available-shows/:id', ctrl.deleteWatchedShow);


app.listen(port, () => console.log(`Your port is running on ${port}`))


//To search from external api
app.get('/api/utelly-data/:name', utellyctrl.getData)