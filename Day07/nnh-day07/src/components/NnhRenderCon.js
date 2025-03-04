import React, { Component } from 'react'

class NnhRenderCon extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nnhHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    nnhHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
  render() {
    return (
          <div className='alert alert-danger'>
                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.nnhHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.nnhHandleLogin}>Login</button>
                }
      </div>
    );
  }
}

export default NnhRenderCon
