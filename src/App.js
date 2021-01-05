import { Component } from 'react';
import Header from './Components/Header';
import AvailableShows from './Components/AvailableShows';
import WatchedShows from './Components/WatchedShows';
import Search from './Components/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      watchedShows: [],
      availableShows: [],
      searchResults: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('/api/available-shows')
      .then(res => this.setState({
        availableShows: res.data
      }))
      .catch(err => console.log(err))
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

  getSearchResults = (inputVal) => {
    axios.get(`/api/utelly-data/${inputVal}`)
      .then(res => {
        this.setState({ searchResults: res.data })
      })
      .catch(err => console.log(err))
  }

  clearSearchResults = () => {
    let emptyArray = []
    this.setState({ searchResults: emptyArray })
  }

  render() {
    //console.log(this.state.availableShows)
    let { watchedShows, availableShows, searchResults } = this.state;
    return (
      <div className="App">
        <Header clearFn={this.clearSearchResults} />
        <Search searchFn={this.getSearchResults} />

        <div className="mainFlex">
          <AvailableShows availableShows={availableShows} watchFn={this.watch} searchResults={searchResults} />
          <WatchedShows watchedShows={watchedShows} editFn={this.edit} deleteFn={this.delete} />
        </div>

      </div>
    );
  }
}

export default App;
