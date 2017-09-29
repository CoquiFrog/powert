import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Statprinter, { } from './../../../src/components/buttonrender/buttonrender.js';



class Stats extends Component {
  constructor(props){
    super(props);
      this.state = {}
  }

  //     }
  // }
  // componentDidMount(){
  //   axios.get('/api/getOne').then((res) =>{
  //     console.log(res);
  //     this.setState({
  //       kanjiobject: res.data[0]
  //     })
  //   })
  // }
  render() {
    console.log(this.props);
    return (
        <div className="Center bimage21">
            <br></br>
        <h2 className="papy">Here is a list of other options</h2>
        <br></br>
      
        <p className="papy">You can learn German if you want</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to='/'><button className='gradient'>Go Home</button></Link>
        <br></br>
        <br></br>
        
        <Link to='/german'><button className='gradient btn verd'>Switch to German</button></Link>
        <br></br>
        <br></br>
        <Link to='/foreignresults'><button className='gradient btn verd'>Foreign Key</button></Link>
        {/* <div className="papy Left">Kanji data here: {this.state.kanjiobject.character}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Meaning is here: {this.state.kanjiobject.meaning}</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Japanese reading is here: {this.state.kanjiobject.kunyomi}</div>
        <br></br>
        <br></br>
        <br></br> */}

        {/* <Statprinter />
    */}
       
         
      </div>
    );
  }
}

export default Stats;