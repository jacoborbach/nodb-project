import { Component } from 'react';
import Header from './Components/Header';
import AvailableShows from './Components/AvailableShows';
import WatchedShows from './Components/WatchedShows';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      watchedShows: [],
      availableShows: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/available-shows')
      .then(res => this.setState({
        availableShows: res.data
      }))
      .catch(err => console.log(err))
  }

  // getWatchedShows = () => {
  //   axios.get('/api/watched-shows')
  //     .then(res => this.setState({
  //       watchedShows: res.data
  //     }))
  //     .catch(err => console.log(err))
  // }

  watch = (show) => {
    axios.post('/api/available-shows', { show: show })
      //if the show is in watchedshows already then alert you have already watched this show please watch something else to diversify your thought process!
      .then(res => this.setState({
        watchedShows: res.data
      }))
      .catch(err => console.log(err))
  }

  deleteWatchedShow = (id) => {
    axios.delete(`/api/available-shows/${id}`)
      .then(res => {
        this.setState({
          watchedShows: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    //console.log(this.state.watchedShows)
    return (
      <div className="App">
        <Header />
        <div className="mainFlex">
          <AvailableShows availableShows={this.state.availableShows} watchFn={this.watch} />
          <WatchedShows watchedShows={this.state.watchedShows} deleteFn={this.deleteWatchedShow} />
        </div>

      </div>
    );
  }
}

export default App;
