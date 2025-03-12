import React, { Component } from 'react'
import NnhAccountList from './components/NnhAccountList';

export default class NnhApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nnhStudents: [
        { nnhId: "2310900033", nnhStudentName: "Nguyễn Ngọc Hiến", nnhEmail:"nguyenhien13@gamil.com",nnhAmount:100000 },
        { nnhId: "2310900035", nnhStudentName: "Vũ Mai Chi", nnhEmail: "nguyenhien13@gmail.com",nnhAmount:24433 },
        { nnhId: "2310999993", nnhStudentName: "Tần Thủy Hoàng", nnhEmail: "nguyenhien13@gmail.com",nnhAmount:322233 },
      ],
       nnhStudent:"",

    }
  }

  //Ham su ly su kien view student
  nnhHandleView = (nnhStudent) => {
    this.setState({
      nnhStudent: nnhStudent,
    })

  }


  render() {
    // log
    console.log("View Student:", this.state.nnhStudent);
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Ngọc Hiến - K23CNT1 
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* Danh sach sinh vien */}
               <NnhAccountList RenderNnhStudents={this.state.nnhStudents} onnnhHandleView={this.nnhHandleView} />
            </div>





          </div>
          </div>
        </section>

      </div>
    );
  }
}

