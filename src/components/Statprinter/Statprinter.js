import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';






class Statprinter extends Component {
    constructor(props) {
        super();
        this.state = {
          

        }
    }

 
   
  render() {
    return (
        <div >
          <div className="papy Left">User Name:  </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Questions Answered:{this.props.questioncount}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Correct Answers: {this.props.correctcount}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Mistakes Made: {this.props.mistakecount}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Ranking:</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Motivation Level:</div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Statprinter;