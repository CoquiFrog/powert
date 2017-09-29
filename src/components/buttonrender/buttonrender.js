import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
  transition: 'all 1s ease-out'
};

const animode = {
  transition: 'all 1s ease-out'

};





class Buttonrender extends Component {
  constructor(props) {
    super();
    this.state = {


    }
  }



  render() {
    return (
      <div >
        <div className="answers">
          <div className="sansnormal wrong wrong2" style={{ ...styles, opacity: this.props.opacityleft, transform: 'scale(' + this.props.scale + ')' }}>Wrong!</div>
          <div className="whiteboxbig1">
            <div className="sansbig tothedown">{this.props.kanji.character}</div>
          </div>
          <div className="sansnormal correct correct2" style={{ ...animode, opacity: this.props.opacityright, transform: 'scale(' + this.props.scale + ')' }}>Correct!</div>
        </div>
        <div className="buttonfix">
          <button className='gradient btn verd' onClick={this.props.ifCorrect1} style={{ cursor: 'pointer' }}>{this.props.kanji.answer1}</button>
          <button className='gradient btn verd' onClick={this.props.ifCorrect2} style={{ cursor: 'pointer' }}>{this.props.kanji.answer2}</button>
          <button className='gradient btn verd' onClick={this.props.ifCorrect3} style={{ cursor: 'pointer' }}>{this.props.kanji.answer3}</button>
          <button className='gradient btn verd' onClick={this.props.ifCorrect4} style={{ cursor: 'pointer' }}>{this.props.kanji.answer4}</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button className='buttonfix gradient' onClick={this.props.randomize} style={{ cursor: 'pointer' }}>Next</button>
      </div>
    );
  }
}

export default Buttonrender;