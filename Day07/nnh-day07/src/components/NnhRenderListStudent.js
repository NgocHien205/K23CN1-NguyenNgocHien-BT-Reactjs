import React, { Component } from 'react'

export default class NnhRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            nnhStudents:[
                {nnhId:"SV001",nnhName:"Nguyễn Ngọc Hiến", nnhAge:20, nnhClass:"K23CNT1"},
                {nnhId:"SV002",nnhName:"Trần Tiến Anh", nnhAge:22, nnhClass:"K23CNT1"},
                {nnhId:"SV003",nnhName:"Vũ Mai ChiChi", nnhAge:21, nnhClass:"K23CNT1"}
            ],
        }
    }
  render() {
     // render data
     const nnhElement = this.state.nnhStudents.map((nnhItem, index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{nnhItem.nnhId}</td>
                <td>{nnhItem.nnhName}</td>
                <td>{nnhItem.nnhAge}</td>
                <td>{nnhItem.nnhClass}</td>
                <td>
                    <button className='btn btn-primary mx-1'>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
      <div className='card'>
      <div className='card-header'>
          <h2>Danh sách sinh viên</h2>
      </div>
      <div className='card-body'>
          <table className='table table-bordered'>
              <thead>
                  <tr>
                      <th>STT</th>
                      <th>nnhID</th>
                      <th>nnhName</th>
                      <th>nnhAge</th>
                      <th>nnhClass</th>
                      <th>Chức năng</th>
                  </tr>
              </thead>
              <tbody>
                  {nnhElement}
              </tbody>
          </table>
      </div>
      </div>
    )
  }
}
