import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityhome: 0

    }}
  render() {
    return (
        <div className="Center bimage8">
          <br></br>
          <br></br>
          <div className="whitebox">
        <h2 className="moveymove papy">Kanji Power Training</h2>
        <br></br>
        <br></br>
        <p className="moveymove2 papy">Get started now!</p>
        </div>
        <br></br>
        <br></br>
        <p className="fadingpower moveme papy"  style={{opacity: this.state.opacityhome}}> Welcome!</p>
        <br></br>
        <br></br>
        {/* <br></br>
        <p className="App-logo papy">日本</p> */}
        <div></div>
        <Link to='/quiz'><button className='gradient btn verd'>Study Now</button></Link>
        <br></br>
        <br></br>
        <Link to='/stats'><button className='gradient btn verd'>Other Options</button></Link>
        <br></br>
        <br></br>
        <div></div>
        
         
      </div>
    );
  }
}

export default Home;
