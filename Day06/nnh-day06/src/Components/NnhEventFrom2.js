import React, { Component } from 'react'

class NnhEventFrom2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nnhCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    nnhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nnhCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nnhHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.nnhCourse);
        event.preventDefault();
    }

  render() {
    return (
      <div className='alert alert-danger'>
         <h2>From Select</h2>
        <from >
            <label htmlFor=''>
            <select name='nnhCourse' id='nnhCourse' 
                            value={this.state.nnhCourse}
                            onChange={this.nnhHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>  
                    
            </label>
            <button className='btn btn-primary'>Click here</button>
        </from>
      </div>
    );
  }
}

export default NnhEventFrom2;
