constructor(props){
    special();
    this.state = {
        kanjiobject: {},
    }
}

componentDidMount(){
    axios.get('/api/getOne').then((res) =>{
        kanjiobject: res.data[0]
    })
}