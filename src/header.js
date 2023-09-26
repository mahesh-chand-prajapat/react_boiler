import React,{Component} from 'react';

class Man extends Component {
   constructor(props){
    super(props);
    this.state={
      name : 'Maheshchand',
      age : 25
    };
   }
   namechange(){
    console.log(this.state);
    this.setState({name :'Kumar'},()=>{
      console.log(this.state);
    });
    
   }
   render(){
    return (
      <>
      <div>{this.state.name}</div>
      <button onClick={()=>this.namechange()}>click me</button>
      </>
    )
   }
}
export default Man;