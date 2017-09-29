import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Germanbuttons, { } from './../../../src/components/Germanbuttons/Germanbuttons.js';



class German extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityhome: 0,
            opacity: 1,
            opacityleft: 0,
            opacityright: 0,
            scale: 1,
            germanArray: {},
            germanWord: {},
            questioncount: 0,
            correctcount: 0,
            mistakecount: 0,
        }
        this.randomize2 = this.randomize2.bind(this);
        this.onHide3 = this.onHide3.bind(this);
        this.onScale3 = this.onScale3.bind(this);
        this.ifCorrect5 = this.ifCorrect5.bind(this);
        this.ifCorrect6 = this.ifCorrect6.bind(this);
        this.ifCorrect7 = this.ifCorrect7.bind(this);
        this.ifCorrect8 = this.ifCorrect8.bind(this);
    }

    componentDidMount() {
        axios.get('/api/getGerman').then((res) => {
            console.log(res);

            var randomizer = Math.floor(Math.random() * (19 - 1)) + 1;
            this.setState({
                germanArray: res.data,
                germanWord: res.data[randomizer]
            })
            
        })
    }

    randomize2() {

        var randomizer = Math.floor(Math.random() * (19 - 1)) + 1;
        this.setState({
            germanWord: this.state.germanArray[randomizer]
        })

    }

    onHide3() {
        this.setState({
            opacity: this.state.opacity > 0 ? 0 : 1
        });
    }
    onHide4() {
        this.setState({
            opacity: this.state.opacity > 0 ? 0 : 1,

        });

    }

    onScale3() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }


    onScale4() {
        console.log("Button 3 is working");
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }

    ifCorrect5() {
        if (this.state.germanWord.answer1 == this.state.germanWord.meaning) {
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

    ifCorrect6() {
        if (this.state.germanWord.answer2 == this.state.germanWord.meaning) {
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

    ifCorrect7() {
        if (this.state.germanWord.answer3 == this.state.germanWord.meaning) {
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

    ifCorrect8() {
        if (this.state.germanWord.answer4 == this.state.germanWord.meaning) {
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

    render() {
        console.log(this.state.germanArray);
        console.log(this.state.germanWord);
        return (
            <div className="Center bimage27">
                <br></br>
                <br></br>
                <p className="fadingpower moveme papy" style={{ opacity: this.state.opacityhome }}>Now you're learning German!</p>
                <br></br>
                <br></br>
                <div></div>
                <Link to='/'><button className='gradient btn verd'>Go Home</button></Link>
                   <Germanbuttons
                    germanArray={this.state.germanArray}
                    germanWord={this.state.germanWord}
                    randomize2={this.randomize2}
                    onHide3={this.onHide3}
                    onScale3={this.onScale3}
                    ifCorrect5={this.ifCorrect5}
                    ifCorrect6={this.ifCorrect6}
                    ifCorrect7={this.ifCorrect7}
                    ifCorrect8={this.ifCorrect8}
                    styles={this.state.styles}
                    opacity={this.state.opacity}
                    opacityleft={this.state.opacityleft}
                    opacityright={this.state.opacityright}
                    scale={this.state.scale}
                    questioncount={this.state.questioncount}
                    correctcount={this.state.correctcount}
                    mistakecount={this.state.mistakecount} />
                <div></div>


            </div>
        );
    }
}

export default German;
