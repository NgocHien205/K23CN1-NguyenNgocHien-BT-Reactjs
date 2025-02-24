import React, { Component } from 'react'

class NnhClassCompEvent1 extends Component {
    //Ham su ly su kien
    nnhEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    nnhEventHandleClick2 = (name)=>{
        alert("Button 2 clicked: name="+name);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.nnhEventHandleClick1}>button 1</button>
        <button className='btn btn-success mx-1'
         onClick={()=>this.nnhEventHandleClick2("Ngoc Hien ")}>button 2</button>
      </div>
    )
  }
}

export default NnhClassCompEvent1 