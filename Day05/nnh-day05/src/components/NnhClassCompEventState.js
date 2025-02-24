import React, { Component } from 'react'

class NnhClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nnhFullName:"Nguyen Ngoc Hien",
            nnhAge:20,
        }
    }
//ham su ly su kien
nnhEvenHandleClick1 = ()=>{
    //lay du lieu trong state
    alert("FullName:" +this.state.nnhFullName + "\n Age:" + this.state.nnhAge);
}
render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary' 
            onClick={this.nnhEvenHandleClick1}>Button 1 - du lieu trong state</button>
            
      </div>
    )
  }
}

export default NnhClassCompEventState
