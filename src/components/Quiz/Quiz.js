import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Buttonrender, { } from './../../../src/components/buttonrender/buttonrender.js';

const styles = {
  transition: 'all 1s ease-out'
};


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      opacityleft: 0,
      opacityright: 0,
      scale: 1,
      kanjiArray: {},
      kanji: {},
      questioncount: 0,
      correctcount: 0,
      mistakecount: 0,



    }
    this.randomize = this.randomize.bind(this);
    this.onHide2 = this.onHide2.bind(this);
    this.onScale2 = this.onScale2.bind(this);
    this.ifCorrect1 = this.ifCorrect1.bind(this);
    this.ifCorrect2 = this.ifCorrect2.bind(this);
    this.ifCorrect3 = this.ifCorrect3.bind(this);
    this.ifCorrect4 = this.ifCorrect4.bind(this);
  }


  componentDidMount() {
    axios.get('/api/getOne').then((res) => {
      console.log(res);

      var randomizer = Math.floor(Math.random() * (82 - 1)) + 1;
      this.setState({
        kanjiArray: res.data,
        kanji: res.data[randomizer]
      })
    })
  }

  randomize() {

    var randomizer = Math.floor(Math.random() * (82 - 1)) + 1;
    this.setState({
      kanji: this.state.kanjiArray[randomizer]
    })

  }

  onHide() {
    this.setState({
      opacity: this.state.opacity > 0 ? 0 : 1
    });
  }
  onHide2() {
    this.setState({
      opacity: this.state.opacity > 0 ? 0 : 1,

    });

  }

  onScale() {
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.3
    });
  }


  onScale2() {
    console.log("Button 3 is working");
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.3
    });
  }

  ifCorrect1() {
    if (this.state.kanji.answer1 == this.state.kanji.meaning) {
      setTimeout(() => {
        this.setState({
          correctcount: (this.state.correctcount + 1),
          questioncount: (this.state.questioncount + 1),
          opacityright: this.state.opacityright > 0 ? 0 : 1,



        })
      }, 2000)
      this.setState({
        opacityright: this.state.opacityright > 0 ? 0 : 1,

      });
    }
    else {
      setTimeout(() => {
        this.setState({
          mistakecount: (this.state.mistakecount + 1),
          questioncount: (this.state.questioncount + 1),
          opacityleft: this.state.opacityleft > 0 ? 0 : 1,

        })
      }, 2000)
      this.setState({
        opacityleft: this.state.opacityleft > 0 ? 0 : 1,
      });
    }
  }

  ifCorrect2() {
    if (this.state.kanji.answer2 == this.state.kanji.meaning) {
      setTimeout(() => {
        this.setState({
          opacityright: this.state.opacityright > 0 ? 0 : 1,
          questioncount: (this.state.questioncount + 1),
          correctcount: (this.state.correctcount + 1)

        })
      }, 2000)
      this.setState({
        opacityright: this.state.opacityright > 0 ? 0 : 1,

      });
    }
    else {
      setTimeout(() => {
        this.setState({
          mistakecount: (this.state.mistakecount + 1),
          questioncount: (this.state.questioncount + 1),
          opacityleft: this.state.opacityleft > 0 ? 0 : 1,


        })
      }, 2000)
      this.setState({
        opacityleft: this.state.opacityleft > 0 ? 0 : 1,
      });
    }
  }

  ifCorrect3() {
    if (this.state.kanji.answer3 == this.state.kanji.meaning) {
      setTimeout(() => {
        this.setState({
          questioncount: (this.state.questioncount + 1),
          correctcount: (this.state.correctcount + 1),
          opacityright: this.state.opacityright > 0 ? 0 : 1,

        })
      }, 2000)
      this.setState({
        opacityright: this.state.opacityright > 0 ? 0 : 1
      });
    }
    else {
      setTimeout(() => {
        this.setState({
          questioncount: (this.state.questioncount + 1),
          mistakecount: (this.state.mistakecount + 1),
          opacityleft: this.state.opacityleft > 0 ? 0 : 1,


        })
      }, 2000)
      this.setState({
        opacityleft: this.state.opacityleft > 0 ? 0 : 1,
      });
    }
  }

  ifCorrect4() {
    if (this.state.kanji.answer4 == this.state.kanji.meaning) {
      setTimeout(() => {
        this.setState({
          questioncount: (this.state.questioncount + 1),
          correctcount: (this.state.correctcount + 1),
          opacityright: this.state.opacityright > 0 ? 0 : 1,

        })
      }, 2000)

      this.setState({
        opacityright: this.state.opacityright > 0 ? 0 : 1
      });
    }
    else {
      setTimeout(() => {
        this.setState({
          mistakecount: (this.state.mistakecount + 1),
          questioncount: (this.state.questioncount + 1),
          opacityleft: this.state.opacityleft > 0 ? 0 : 1,


        })
      }, 2000)
      this.setState({
        opacityleft: this.state.opacityleft > 0 ? 0 : 1,
      });
    }
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
      <div className="Center bimage4">
        <div style={{ ...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')' }}>
          <a onClick={this.onHide.bind(this)} style={{ cursor: 'pointer' }}>HIDE</a>
          <a onClick={this.onScale.bind(this)} style={{ cursor: 'pointer' }}>SCALE</a>
        </div>

        <Link to='/'><button className='gradient btn'>Go Home</button></Link>
        <br></br>
        <br></br>
        <div className="whitebox4">
        <div>correct {this.state.correctcount}</div>
        <div>mistake {this.state.mistakecount}</div>
        <div>question {this.state.questioncount}</div>
        </div>
        <div>
          <div className="Left" >Take a look at the Japanese character below, then select the answer you think is correct!</div>
        </div>
      
        <Buttonrender
          kanjiArray={this.state.kanjiArray}
          kanji={this.state.kanji}
          randomize={this.randomize}
          onHide2={this.onHide2}
          onScale2={this.onScale2}
          ifCorrect1={this.ifCorrect1}
          ifCorrect2={this.ifCorrect2}
          ifCorrect3={this.ifCorrect3}
          ifCorrect4={this.ifCorrect4}
          styles={this.state.styles}
          opacity={this.state.opacity}
          opacityleft={this.state.opacityleft}
          opacityright={this.state.opacityright}
          scale={this.state.scale}
          
        />
      </div>
    );
  }
}

export default Quiz;
