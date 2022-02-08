  import React from "react";
  import axios from "axios";
  export default class ShowResult extends React.Component{
    state={

    }
    playagain=()=>{
      window.location="/";
    }
     async componentDidMount(){
      let date = new Date();
      let currentdate = date.toLocaleString();
      let json = {name:this.props.name,error:this.props.counter,date:currentdate};
      let res = await axios.post("http://localhost:3100/",json);
    
    }
    render(){

          let date = new Date();
          let currentdate = date.toLocaleString();
          return   <React.Fragment>
          <div className="result  m-auto">
          <h4 className="text-primary">Thankyou!</h4>
          <b>Name:-</b>{this.props.name}<br/>
          <b>Wrong attempt:-</b>{this.props.counter}<br/>
          <b>Date:- </b>{currentdate}
          <div className="play m-auto" onClick={()=>this.playagain()}>Play again</div>
        </div>
      </React.Fragment>
    }
  }