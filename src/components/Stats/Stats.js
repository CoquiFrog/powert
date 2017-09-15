import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';



class Home extends Component {
  // constructor(props){
  //   super(props);
  //     this.state = {
  //       kanjiobject: {},

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
    return (
        <div className="Center">
            <br></br>
        <h2 className="papy">The mighty stat page</h2>
        <br></br>
      
        <p className="papy">There will be stats here one day</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to='/'><button className='gradient'>Go Home</button></Link>
        <br></br>
        <br></br>

        <Link to='/quiz'><button className='gradient'>Study more kanji</button></Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

        <div className="papy Left">User Name: </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Questions Answered:</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Correct Answers:</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="papy Left">Mistakes Made:</div>
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
   
        <div className="bimage2"></div>
         
      </div>
    );
  }
}

export default Home;