import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





class Buttonrender extends Component {
    constructor(props) {
        super();
        this.state = {


        }
    }

 
  render() {
    return (
        <div>
            <div className="answers">
          <div className="sansnormal Wrong">Wrong!</div>
          <div className="sansbig">{this.props.kanji.character}</div>
          <div className="sansnormal Correct">Correct!</div>
        </div>
        <button className='gradient btn verd'>{this.props.kanji.answer1}</button>
        <button className='gradient btn verd'>{this.props.kanji.answer2}</button>
        <button className='gradient btn verd'>{this.props.kanji.answer3}</button>
        <button className='gradient btn verd'>{this.props.kanji.answer4}</button>
        <br></br>
        <br></br>
        <br></br>
        <button className='gradient btn verd' onClick={this.props.randomize}>Next</button>
      </div>
    );
  }
}

export default Buttonrender;