import React from "react";
import ShowResult from "./showResult";
export default class MyQuestion extends React.Component{
   state={
      indexs:0,
      counter:0,
      template:"",
  }
  checkAnswer = (name, index) => {
    //console.log(name, index);
    let s1 = { ...this.state };
    
    let data = this.props.getArray[index]; 
    
    console.log(data);
    if (data.answer !== name) {
      s1.indexs = index;
      s1.template = "Wrong Answer";
      s1.counter += 1;
      this.setState(s1);
    } else if (data.answer == name) {
      s1.indexs = s1.indexs + 1;
      s1.template = "";
      this.setState(s1);
    }
  };
  render(){
    const {name,getArray}=this.props;
    const{indexs,template,counter}=this.state;
    // console.log(getArray);
    
    let i;
    if( indexs>4){ 
      i = 0;
       } else {
        i = indexs;
       }
    let {question,options,image} = getArray[i];
   
    return   <React.Fragment>

      <div className="text-center">

      <span className="text-danger">{template}</span>
      {indexs<5?<div className="questions">
       
        <div className="question1"> 
        <h4 className="questn">{question}</h4>
        </div>
        <img className="img-fluid img-thumbnail" src={image}/>
        <div className="buttons">
          {options.map((value,index)=><button className="btn btn-info btn sm m-1" key={index} onClick={()=>this.checkAnswer(value,indexs)}>{value}</button>)}
        </div> 
      </div>:<div className="">
          <ShowResult name={name} counter={counter} />
        </div>}
        
        
        </div>
    </React.Fragment>
  }
}