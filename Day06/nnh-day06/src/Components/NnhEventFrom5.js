import React, { Component } from 'react'

class NnhEventFrom5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nnhName:'Hien',
            nnhAge:20,
            nnhGender:'Female',
            nnhCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nnhHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nnhHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nnhName + "\n" + this.state.nnhAge);

        // Chuyển dữ liệu trên form lên App component (nnhApp);
        this.props.onNnhHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nnhName'>Student Name:</label>
                        <input type='text' name='nnhName' id='nnhName' 
                            value={this.state.nnhName}
                            onChange={this.nnhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nnhAge'>Student Age:</label>
                        <input type='text' name='nnhAge' id='nnhAge' 
                            value={this.state.nnhAge}
                            onChange={this.nnhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nnhGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nnhGender' id='nnhMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nnhGender === 'Male'}
                                onChange={this.nnhHandleChange} />
                            <label htmlFor='nnhMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nnhGender' id='nnhFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nnhGender === 'Female'}
                                onChange={this.nnhHandleChange} />
                            <label htmlFor='nnhFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nnhGender' id='nnhNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nnhGender === 'None'}
                                onChange={this.nnhHandleChange} />
                            <label htmlFor='nnhNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nnhCourse'>
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
                    </div>
                    <button onClick={this.nnhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
  }
}

export default NnhEventFrom5;