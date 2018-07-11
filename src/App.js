import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    bookmarks: [],
  }

  componentDidMount() {
    // axios
    //   .get('http://localhost:8000/api-auth/')
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    axios
      .get('http://localhost:8000/api-auth/bookmarks')
      .then(response => {
        // console.log(response);
        this.setState({ bookmarks: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bookmarks</h1>
        </header>
        <div>
          { this.state.bookmarks.map((bookmark, index) => {
            return (
              <div key={index}>
                <p>Site: <strong>{bookmark.name}</strong></p>
                <p>{bookmark.url}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
