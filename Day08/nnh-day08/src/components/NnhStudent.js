import React, { Component } from 'react';

class NnhStudent extends Component {
    constructor(props){
        super(props);

    }
    //Ham su lys chuc nang xem
    nnhHandleView = (NnhStudent)=>{
        //chuyen len NnhStudentList
        this.props.onnnhHandleView(NnhStudent);

    }
    render() {
        //lay doi tuong du lieu chuyen tu NnhStudentList
        let{RenderNnhStudent, key} = this.props;
        console.log("Student:",RenderNnhStudent);
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{RenderNnhStudent.nnhId}</td>
                    <td>{RenderNnhStudent.nnhStudentName}</td>
                    <td>{RenderNnhStudent.nnhAge}</td>
                    <td>{RenderNnhStudent.nnhGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.nnhHandleView(RenderNnhStudent)}            
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}

export default NnhStudent;