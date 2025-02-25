import React, { Component } from 'react'

class NnhEventFrom3 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nnhGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nnhHandleChange = (event)=>{
        this.setState({
            nnhGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nnhHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nnhGioiTinh)
    }


  render() {
    return (
      <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nnhGioiTinh'  id='nnhNam' className='mx-2'
                            value="Nam" checked={this.state.nnhGioiTinh === 'Nam'} onChange={this.nnhHandleChange}/> 
                            <label htmlFor='nnhNam'>Nam</label>  
                        <input type='radio' name='nnhGioiTinh'  id='nnhNu' className='mx-2'
                            value="Nữ" checked={this.state.nnhGioiTinh === 'Nữ'} onChange={this.nnhHandleChange}/> 
                            <label htmlFor='nnhNu'>Nữ</label>  
                        <input type='radio' name='nnhGioiTinh' id='nnhKhac' className='mx-2'
                            value="Khác" checked={this.state.nnhGioiTinh === 'Khác'} onChange={this.nnhHandleChange}/> 
                            <label htmlFor='nnhKhac'>Khác</label>
                    </div>
                    <button onClick={this.nnhHandleSubmit}>Submit</button>
                </form>
      </div>
    );
  }
}

export default  NnhEventFrom3;