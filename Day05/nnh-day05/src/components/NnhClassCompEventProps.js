import React, { Component } from 'react'

class NnhClassCompEventProps extends Component {
    //Ham su lys su kien
    nnhEventHandleClick1 = ()=>{
        alert("Hello..." + this.props.nnhRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nnhEventHandleClick1}>Button 1</button>
      </div>
    );
  }
}

export default NnhClassCompEventProps;