import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Buttonrender, { } from './../../../src/components/buttonrender/buttonrender.js';



class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanjiArray: {},
      kanji: {},

    }
     this.randomize = this.randomize.bind(this);
  }
  componentDidMount() {
    axios.get('/api/getOne').then((res) => {
      console.log(res);

      var randomizer = Math.floor(Math.random() * (80 - 1)) + 1;
      this.setState({
        kanjiArray: res.data,
        kanji: res.data[randomizer]
      })
    })
  }

  randomize(){
    
    var randomizer = Math.floor(Math.random() * (80 - 1)) + 1;
      this.setState({
      kanji: this.state.kanjiArray[randomizer]
    })

  }

  // nextButton(){
  //   axios.get('/api/getOne').then((res) => {
  //     console.log(res);
  //   var randomizer = Math.floor(Math.random() * (80 - 1)) + 1;
  //   this.setState({
  //     kanji: res.data[randomizer]
  //   })
  // }



  // randomizer(min, max){
  //   return Math.random() * (max - min) + min;
  // }

  render() {

    return (
      <div className="Center">

        <br></br>
        <div className="papy">Kanji Power Quiz</div>
        <br></br>
        <br></br>
        <br></br>
        <Link to='/'><button className='gradient btn'>Go Home</button></Link>
        <br></br>
        <br></br>
        <Link to='/stats'><button className='gradient btn'>Personal Stats</button></Link>

        {/* <div className="answers">
          <div className="sansnormal Wrong">Wrong!</div>
          <div className="sansbig">{this.state.kanji.character}</div>
          <div className="sansnormal Correct">Correct!</div>
        </div>
        <button className='gradient btn verd'>{this.state.kanji.answer1}</button>
        <button className='gradient btn verd'>{this.state.kanji.answer2}</button>
        <button className='gradient btn verd'>{this.state.kanji.answer3}</button>
        <button className='gradient btn verd'>{this.state.kanji.answer4}</button>
        <br></br>
        <br></br>
        <br></br> */}
        <Buttonrender
        kanjiArray={this.state.kanjiArray}
        kanji={this.state.kanji}
        randomize={this.randomize}
      />
        <div className="bimage"></div>
      </div>
    );
  }
}

export default Quiz;
