import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Home extends Component {
  render() {
    return (
        <div className="Center">
          <br></br>
          <br></br>
        <h2 className="moveymove papy">Kanji Power Training</h2>
        <br></br>
        <br></br>
        <p className="moveymove2 papy">Get started now!</p>
        <br></br>
        <br></br>
        <br></br>
        <div></div>
        <Link to='/quiz'><button className='gradient btn verd'>Study Now</button></Link>
        <br></br>
        <br></br>
        <Link to='/stats'><button className='gradient btn verd'>Personal Statistics</button></Link>
        <br></br>
        <br></br>
        <div className="bimage1"></div>
        
         
      </div>
    );
  }
}

export default Home;
