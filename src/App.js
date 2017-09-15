import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router';
// import './server.js';




class App extends Component {
  render() {
    return (
      <div>
        { router }
         
      </div>
    );
  }
}

export default App;

// use axios call to the back end.
// component did mount is on the front end.


// make sql file with data
// 
