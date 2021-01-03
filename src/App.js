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
    }
  }

  watch = (show) => {
    axios.post('/api/available-shows', { show: show })
      .then(res => this.setState({
        watchedShows: res.data
      }))
      .catch(err => console.log(err))
  }

  edit = (id, newName) => {
    let body = { name: newName };
    axios.put(`/api/available-shows/${id}`, body)
      .then(res => {
        this.setState({ watchedShows: res.data });
      })
      .catch(err => console.log(err));
  }

  delete = (id) => {
    axios.delete(`/api/available-shows/${id}`)
      .then(res => {
        this.setState({ watchedShows: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    //console.log(this.state.watchedShows)
    let { watchedShows } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="mainFlex">
          <AvailableShows watchFn={this.watch} />
          <WatchedShows watchedShows={watchedShows} editFn={this.edit} deleteFn={this.delete} />
        </div>

      </div>
    );
  }
}

export default App;
