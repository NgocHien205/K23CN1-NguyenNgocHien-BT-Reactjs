import React, { Component } from 'react'

class NnhClassComp extends Component {
    constructor(props){
        super(props);
        // Khởi tạo state
      this.state = {
        FullName:"Ngọc Hiến",
        Age:19,
        Phone:"0383485309"
      }

    }
    //Hàm xử lý sự kiện
    changeInfo = (ev)=>{
      //Cập nhật state
      this.setState({
        FullName:"Hiến Nguyễn Ngọc"
      });
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2>Trình bày dữ liệu từ state</h2>
        <p>Info state (FullName): {this.state.FullName}</p>
        <p>Info state (Age): {this.state.Age}</p>
        <p>Info state (Phone): {this.state.Phone}</p>

        <hr/>
        <button className='btn btn-primary'onClick={this.ChangeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ Props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>FullName: {this.props.renderUsers ?this.props.renderUsers.FullName:''}</p>
        <p>Age: {this.props.renderUsers ?this.props.renderUsers.Age:''}</p>
        <p>Phone: {this.props.renderUsers ?this.props.renderUsers.Phone:''}</p>

      </div>
    )
  }
}


export default NnhClassComp