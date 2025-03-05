import React, { Component } from 'react';
import NnhControl from './components/NnhControl';
import NnhStudentList from './components/NnhStudentList';
import NnhFrom from './components/NnhFrom';

class NnhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nnhStudents:[
        {nnhId:"SV001",nnhStudentName:"Nguyễn Ngọc Hiến",nnhAge:20,nnhGender:"Nam",nnhBirthday:"13/06/2005",nnhBirthPlace:"TB", nnhAddress:"Tòa VCN, 117 Trần CungCung"},
        {nnhId:"SV002",nnhStudentName:"Vũ Mai Chi",nnhAge:188,nnhGender:"Nữ",nnhBirthday:"25/05/1179",nnhBirthPlace:"HN", nnhAddress:"Trung quốc"},
        {nnhId:"SV003",nnhStudentName:"Tần Thủy Hoàng",nnhAge:55,nnhGender:"Nam",nnhBirthday:"25/05/1079",nnhBirthPlace:"TpHCM", nnhAddress:"Trung Quốc"},
        {nnhId:"SV004",nnhStudentName:"Hoàng Thùy Linh",nnhAge:55,nnhGender:"Nam",nnhBirthday:"25/05/1079",nnhBirthPlace:"DN", nnhAddress:"Hồ chí minh"},
      ],
      nnhStudent:"",

    }
  }

  //Ham su ly su kien view student
  nnhHandleView = (nnhStudent)=>{
    this.setState({
      nnhStudent:nnhStudent,
    })

  }


  render() {
     // log
     console.log("View Student:", this.state.nnhStudent);
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Ngọc Hiến - K23CNT1 - Mini project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
               
                  {/* header */}
                  <NnhControl />
                  {/* Danh sach sinh vien                       */}
                  <NnhStudentList RenderNnhStudents={this.state.nnhStudents} onnnhHandleView={this.nnhHandleView}/>
              </div>
            </div>
            <div className="col-5 grid-margin">
                  {/* from */}
                  <NnhFrom RenderNnhStudent = {this.state.nnhStudent}/>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default NnhApp;