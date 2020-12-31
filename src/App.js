import { Component } from 'react';
import AvailableShows from './Components/AvailableShows';
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
    this.getAvailableShows()
  }

  getAvailableShows = () => {
    axios.get('/api/available-shows')
      .then(res => this.setState({
        availableShows: res.data
      }))
      .catch(err => console.log(err))
  }


  watch = () => {

  }

  render() {
    return (
      <div className="App">
        <AvailableShows availableShows={this.state.availableShows} />
      </div>
    );
  }
}

export default App;
