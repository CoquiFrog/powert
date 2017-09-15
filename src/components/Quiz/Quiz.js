import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Quiz extends Component {
  constructor(props){
    super(props);
      this.state = {
        kanjiobject: {},

      }
  }
  componentDidMount(){
    axios.get('/api/getOne').then((res) =>{
      console.log(res);
      this.setState({
        kanjiobject: res.data[33]
      })
    })
  }
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

        <div className="answers">
          <div className="sansnormal Wrong">Wrong!</div>
          <div className="sansbig">{this.state.kanjiobject.character}</div>
          <div className="sansnormal Correct">Correct!</div>
        </div>
        <button className='gradient btn verd'>{this.state.kanjiobject.answer1}</button>
        <button className='gradient btn verd'>{this.state.kanjiobject.answer2}</button>
        <button className='gradient btn verd'>{this.state.kanjiobject.answer3}</button>
        <button className='gradient btn verd'>{this.state.kanjiobject.answer4}</button>
        <br></br>
        <br></br>
        <br></br>
        <div className="bimage"></div>
      </div>
    );
  }
}

export default Quiz;
