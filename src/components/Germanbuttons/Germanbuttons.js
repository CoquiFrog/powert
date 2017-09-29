import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
  transition: 'all 1s ease-out'
};

const animode = {
  transition: 'all 1s ease-out'

};





class Germanbuttons extends Component {
    constructor(props) {
        super();
        this.state = {
            

        }
    }

   
  render() {
    return (
        <div >
          <div style={{...styles, opacity: this.props.opacity, transform: 'scale(' + this.props.scale + ')'}}>
          <a onClick={this.props.onHide3} style={{cursor: 'pointer'}}>HIDE</a>
         </div>
 
            <div className="answers">
          <div className="sansnormal wrong wrong2" style={{...styles, opacity: this.props.opacityleft, transform: 'scale(' + this.props.scale + ')'}}>Wrong!</div>
          <div className="newtimes">{this.props.germanWord.word}</div>
          <div className="sansnormal correct correct2" style={{...animode, opacity: this.props.opacityright, transform: 'scale(' + this.props.scale + ')'}}>Correct!</div>
        </div>
        <div></div>
       <div className="buttonfix">
        <button className='gradient btn verd' onClick={this.props.ifCorrect5} style={{cursor: 'pointer'}}>{this.props.germanWord.answer1}</button>
        <button className='gradient btn verd' onClick={this.props.ifCorrect6} style={{cursor: 'pointer'}}>{this.props.germanWord.answer2}</button>
        <button className='gradient btn verd' onClick={this.props.ifCorrect7} style={{cursor: 'pointer'}}>{this.props.germanWord.answer3}</button>
        <button className='gradient btn verd' onClick={this.props.ifCorrect8} style={{cursor: 'pointer'}}>{this.props.germanWord.answer4}</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button className='buttonfix gradient' onClick={this.props.randomize2} style={{cursor: 'pointer'}}>Next</button>
      </div>
    );
  }
}

export default Germanbuttons;