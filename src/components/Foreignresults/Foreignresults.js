import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
const styles = {
    transition: 'all 1s ease-out'
};

const animode = {
    transition: 'all 1s ease-out'

};





class Foreignresults extends Component {
    constructor(props) {
        super(props);
        this.state = {

            foreignObject: {},
            foreignArray1: {},
            foreignArray2: {},
            foreignArray3: {},
            foreignArray4: {},
            foreignArray5: {},
            foreignArray6: {},
            foreignArray7: {},
            foreignArray8: {},
            foreignArray9: {},
            foreignArray10: {},
            foreignArray11: {},
            foreignArray12: {},
            foreignArray13: {},
            foreignArray14: {},
            foreignArray15: {},
            foreignArray16: {},
            foreignArray17: {},
            foreignArray18: {},
            foreignArray19: {},
            foreignArray20: {},
            foreignArray21: {},
            foreignArray22: {},
            scale: 1,
            opacity: 0,
            opacity2: 0,
            opacity3: 0,
            opacity4: 0,
            opacity5: 0,
            opacity6: 0

        }
    }

    componentDidMount() {
        axios.get('/api/getForeignresults').then((res) => {
            console.log(res);


            this.setState({
                foreignObject: res.data,
                foreignArray1: res.data[0],
                foreignArray2: res.data[1],
                foreignArray3: res.data[2],
                foreignArray4: res.data[3],
                foreignArray5: res.data[4],
                foreignArray6: res.data[5],
                foreignArray7: res.data[6],
                foreignArray8: res.data[7],
                foreignArray9: res.data[8],
                foreignArray10: res.data[9],
                foreignArray11: res.data[10],
                foreignArray12: res.data[11],
                foreignArray13: res.data[12],
                foreignArray14: res.data[13],
                foreignArray15: res.data[14],
                foreignArray16: res.data[15],
                foreignArray17: res.data[16],
                foreignArray18: res.data[17],
                foreignArray19: res.data[18],
                foreignArray20: res.data[19],
                foreignArray21: res.data[20],
                foreignArray22: res.data[21]
            })

        })
    }
    onHide9() {
        this.setState({
            opacity: this.state.opacity > 0 ? 0 : 1,

        });

    }
    onHide10() {
        this.setState({
            opacity2: this.state.opacity2 > 0 ? 0 : 1,

        });

    }
    onHide11() {
        this.setState({
            opacity3: this.state.opacity3 > 0 ? 0 : 1,

        });

    }
    onHide12() {
        this.setState({
            opacity4: this.state.opacity4 > 0 ? 0 : 1,

        });

    }
    onHide13() {
        this.setState({
            opacity5: this.state.opacity5 > 0 ? 0 : 1,

        });

    }
    onHide14() {
        this.setState({
            opacity6: this.state.opacity6 > 0 ? 0 : 1,

        });

    }

    onScale9() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.5
        });
    }
    onScale10() {
        this.setState({
            scale2: this.state.scale2 > 1 ? 1 : 1.5
        });
    }

    onScale11() {
        this.setState({
            scale3: this.state.scale3 > 1 ? 1 : 1.5
        });
    }
    onScale12() {
        this.setState({
            scale4: this.state.scale4 > 1 ? 1 : 1.5
        });
    }
    onScale13() {
        this.setState({
            scale5: this.state.scale5 > 1 ? 1 : 1.5
        });
    }
    onScale14() {
        this.setState({
            scale6: this.state.scale6 > 1 ? 1 : 6
        });
    }




    render() {
        // // //   console.log(res);
        //   console.log(foreignArray1);
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="newtimes Center">
                    <a onClick={this.onHide9.bind(this)} style={{ cursor: 'pointer' }}>{this.state.foreignArray1.word} </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
    <div className="Center newtimes" onClick={this.onScale9.bind(this)} style={{ ...animode, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')', cursor: 'pointer' }}>{this.state.foreignArray1.character} 
                </div>

                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                  
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="newtimes Center">
                <a onClick={this.onHide10.bind(this)} style={{ cursor: 'pointer' }}>{this.state.foreignArray2.word} </a>
                <br></br>
                <br></br>
                <br></br>
                </div>
<div className="Center newtimes" onClick={this.onScale10.bind(this)} style={{ ...animode, opacity: this.state.opacity2, transform: 'scale(' + this.state.scale2 + ')', cursor: 'pointer' }}>{this.state.foreignArray2.character} 
            </div>

                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                  
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="newtimes Center">
                <a onClick={this.onHide11.bind(this)} style={{ cursor: 'pointer' }}>{this.state.foreignArray3.word} </a>
                <br></br>
                <br></br>
                <br></br>
                </div>
<div className="Center newtimes" onClick={this.onScale11.bind(this)} style={{ ...animode, opacity: this.state.opacity3, transform: 'scale(' + this.state.scale3 + ')', cursor: 'pointer' }}>{this.state.foreignArray3.character} 
            </div>

                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                  
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="newtimes Center">
                <a onClick={this.onHide12.bind(this)} style={{ cursor: 'pointer' }}>{this.state.foreignArray4.word} </a>
                <br></br>
                <br></br>
                <br></br>
                </div>
<div className="Center newtimes" onClick={this.onScale12.bind(this)} style={{ ...animode, opacity: this.state.opacity4, transform: 'scale(' + this.state.scale4 + ')', cursor: 'pointer' }}>{this.state.foreignArray4.character} 
            </div>

                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                  
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="newtimes Center">
                <a onClick={this.onHide13.bind(this)} style={{ cursor: 'pointer' }}>{this.state.foreignArray5.word} </a>
                <br></br>
                <br></br>
                <br></br>
                </div>
<div className="Center newtimes" onClick={this.onScale13.bind(this)} style={{ ...animode, opacity: this.state.opacity5, transform: 'scale(' + this.state.scale5 + ')', cursor: 'pointer' }}>{this.state.foreignArray5.character} 
            </div>

                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                  
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="Center newtimes2">
                    
                    <div></div>
                </div>
                

                <div className="newtimes Center">
                <a onClick={this.onHide14.bind(this)} style={{ cursor: 'pointer' }}>Foreign Key </a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
             
                </div>
<div className="Center newtimes2" onClick={this.onScale14.bind(this)} style={{ ...animode, opacity: this.state.opacity6, transform: 'scale(' + this.state.scale6 + ')', cursor: 'pointer' }}>{JSON.stringify(this.state.foreignObject)} 
            </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
  
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default Foreignresults;