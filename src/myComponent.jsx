import React from "react";
import MyQuestion from "./myQuestion";

export default class MyComponent extends React.Component{

    state={
        name:"",
        view:false,
        questions:[
            {
                question:"Who is the fastest animal?",
                image:"https://i.ibb.co/GMxd0Ss/Taken-in-the-Okavango-Delta.jpg",
                answer:" Cheetah",
                options:[" Cheetah","Dear","Bear"]
            },
            {
                question:"Which animal is known as the man’s best friend?",
                image:"https://i.ibb.co/dcm74Hw/dog-1.jpg" ,
                answer:"Dog",
                options:["Dog","Cat","Horse"]
            },
            {
                question:"Which  one is the tallest bird in the world? ",
                image:"https://i.ibb.co/N9Pqm5y/ostrich.jpg" ,
                answer:"Ostrich",
                options:["Parrot","Ostrich","Sparrow"]
            },
            {
                question:"What color is the blood of an octopus?",
                image:"https://i.ibb.co/Hg3Q5SJ/Octupus.jpg" ,
                answer:"Blue",
                options:["Blue","Red","White"]
            },
            {
                question:"Which underwater animal can sing?",
                image:"https://i.ibb.co/kBkwkwP/whale.jpg" ,
                answer:"Whale",
                options:["Whale","Shark","Frog"]
            },
            {
                question:"Which animal breathes through its skin? ",
                image:"https://i.ibb.co/z4SyLt9/frog.jpg",
                answer:"Frog",
                options:["Fish","Octopus","Frog"]
            },
            {
                question:"Which is the tallest animal?",
                image:"https://i.ibb.co/M7LJCf9/Giraffe.jpg " ,
                answer:"Giraffe",
                options:["Elephant","Cow","Giraffe"]
            },
            {
                question:"What animal eats mainly bamboo?",
                image:"https://i.ibb.co/MZmdTd6/bamboo.jpg" ,
                answer:"Panda",
                options:["Panda","Goat","Elephant"]
            },
            {
                question:"What is the name of insect? ",
                image:"https://i.ibb.co/44fKcDq/fairflies.jpg" ,
                answer:"Fairyflies",
                options:["bird","Fairyflies","Storm"]
            },
            {
                question:"What does a panda eat?",
                image:"https://i.ibb.co/Yyjyc1M/panda.jpg" ,
                answer:"Bamboo",
                options:["Grass","Bamboo","Sweet"]
            },
            {
                question:"What is the name of this  animal?",
                image:"https://i.ibb.co/M7LJCf9/Giraffe.jpg" ,
                answer:"Giraffe",
                options:["Elephant","Ostrich","Giraffe"]
            },
            {
                question:"What is the Name of this  animal?",
                image:"https://i.ibb.co/FJYFkPT/Elephant.jpg" ,
                answer:"Elephant",
                options:["Ostrich","Giraffe","Elephant"]
            },
            {
                question:"What is the name  of water animal? ",
                image:"https://i.ibb.co/T4r41Ny/Sailfish.jpg" ,
                answer:"Sailfish",
                options:["Shark","Sailfish","Whale"]
            },
            {
                question:"Name of this animal ?",
                image:"https://i.ibb.co/bH5WRJJ/Monkey.jpg" ,
                answer:"Monkey",
                options:["Horse","Donkey","Monkey"]
            },
            {
                question:"Name  of big cat that cannot roar? ",
                image:"https://i.ibb.co/GMxd0Ss/Taken-in-the-Okavango-Delta.jpg" ,
                answer:"Cheeta",
                options:["Cat","lion","Cheeta"]
            },
            {
                question:"Name of this animal ? ",
                image:"https://i.ibb.co/GMxd0Ss/Taken-in-the-Okavango-Delta.jpg" ,
                answer:"Cheeta",
                options:["Lion","beer","Cheeta"]
            },
            {
                question:"Name of this Animal? ",
                image:"https://i.ibb.co/dcm74Hw/dog-1.jpg" ,
                answer:"Dog",
                options:["Dog","Cat","Bird"]
            },
            {
                question:"What is a baby fox called? ",
                image:"https://i.ibb.co/tC3gPyP/A-kit-baby-fox.jpg" ,
                answer:"Kit",
                options:["Kit","Puppy","Dog"]
            },
            {
                question:" Name of this animal ?",
                image:"https://i.ibb.co/bH5WRJJ/Monkey.jpg",
                answer:"Monkey",
                options:["Monkey","Bird","Dog"]
            },
            {
                question:"Name of this animal ? ",
                image:"https://i.ibb.co/dcm74Hw/dog-1.jpg" ,
                answer:"Dog",
                options:["Dog","Cat","Bird"]
            },
            
        ],
        getArray:[],
    }
    handleInput=(e)=>{
    this.setState({name:e.target.value});
    }
    view=()=>{
     this.setState({view:!this.state.view})
       }
     componentDidMount() {
        const { questions } = this.state;
        let newArray = [];
        for (let i = 0; i < 5; i++) {
        let randomInteger;
         while (!randomInteger) {
            let temp = Math.floor(Math.random() * questions.length);
            if (!newArray.filter((v) => questions[temp] == v).length) {
                randomInteger = temp;
            }
          }
          newArray.push(questions[randomInteger]);
        }
        this.setState({ getArray: newArray });
      }
    render(){
        const {name,view,getArray}= this.state;
        // console.log(this.state.view);
        return <React.Fragment>
     <div className="main">
                {view===false?
            <div className="container m-auto">
     <div className="entryBox m-auto">
    <h3 className="welcome">Quiz Question App</h3>
     <div className="form-group p-2">
     <input type="text" className="form-control w-50 m-auto" name="name"  onChange={this.handleInput} placeholder="Enter your name"/>
        </div>
     <div className="submitButton">
    <button className="btn btn-success btn-sm" onClick={()=>this.view()}>Play Game</button>
         </div>
             </div>
            </div>:
    <MyQuestion name={name} getArray={getArray} />}
            </div>
        </React.Fragment>
    }
}