import React, { Component } from 'react'
import NnhAccountAdd from './NnhAccountAdd';

export default class NnhAccountList extends Component {
    // constructor(props){
    //     super(props);

    // }
    //Ham su ly su kien view
    nnhHandleView = (NnhStudent)=>{
        //chuyen du lieu len NnhApp
        this.props.onnnhHandleView(NnhStudent); 

    }


    render() {
        //lay du lieu trong props tu NnhApp chuyen xuong
        let {RenderNnhStudents} = this.props;
        console.log("List:",RenderNnhStudents);

         //chuyen du lieu vao nnhStudent de hien thi
         let NnhElementStudent = RenderNnhStudents.map((nnhItem,index)=>{
            return <NnhAccountAdd key={index} RenderNnhStudent={nnhItem} onnnhHandleView={this.nnhHandleView} />
         })
        return (
       
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Email</th>
                                <th>amount</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           {NnhElementStudent}
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}