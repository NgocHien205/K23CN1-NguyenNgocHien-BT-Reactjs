import React, { Component } from 'react'

class NnhEventFrom1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nnhStudentName:"Ngoc Hien",
        }
    }
    //Ham su lys su kien khi du lieu tren textbox (nnhStudentName) thay doi
    nnhHandleChange = (event)=>{
        //cap nhat lai state
        this.setState({
            nnhStudentName:event.target.value,
        })
    }
    //khi Submit from ,lay du lieu va hien thi
    nnhHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.nnhStudentName);
        ev.preventDefault();
    }

  render() {
    return (
      <div className='alert alert-info'>
        <h2>From Input</h2>
        <from onSubmit={this.nnhHandleSubmit}>
            <label htmlFor='nnhStudentName'>
                <input type='text' name='nnhStudentName'  id='nnhStudentName'
                    value={this.state.nnhStudentName}
                    onChange={this.nnhHandleChange}
                />
                    
            </label>
            <button className='btn btn-primary'>Click here</button>
        </from>
        
      </div>
    );
  }
}

export default NnhEventFrom1;
