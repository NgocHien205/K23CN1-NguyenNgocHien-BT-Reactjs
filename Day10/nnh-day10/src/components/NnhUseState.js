import React, { useState } from 'react'

function NnhUseState() {
    //
    const [nnhCount, setNnhCount] = useState(0);

    //
    const nnhArr = [10, 20, 30, 40];
    const [nnhArray, setNnhArray] = useState(nnhArr);

    //
    const nnhStudents = [
        { nnhId: "SV01", nnhName: "NgocHien", nnhAge: 20 },
        { nnhId: "SV02", nnhName: "NgocHien3", nnhAge: 202 },
    ];
    const [nnhStudentList, setNnhStudentList] = useState(nnhStudents);

    //
    const nnhHandleAddList = () => {
        setNnhArray([
            ...nnhArray,
            parseInt(Math.random() * 100),
        ])
    }

    //
    const nnhHandleAddNewStudent = () => {
        let nnhStudent = {
            nnhId: "Sv003",
            nnhName: "nGUYEN Ngoc Hien",
            nnhAge: 20

        };
        //
        setNnhStudentList([
            ...nnhStudentList,
            nnhStudent
        ])

        console.log("list:", nnhStudentList);
    }
    return (
        <div className='alert alert-danger'>
            <h2>useState Demo</h2>
            <div>
                <h3>Count: {nnhCount}</h3>
                <button onClick={() => setNnhCount(nnhCount + 1)}>Tang: + </button>
                <button onClick={() => setNnhCount(nnhCount - 1)}>Giam: - </button>
            </div>
            <div>
                <h3>Array: {nnhArray.toString()}</h3>
                <button onClick={nnhHandleAddList}>Them Phan Tu</button>
            </div>
            <div>
                <h3>Danh Sach Sinh Vien</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            nnhStudentList.map((nnhStudent, index) => {
                                return <>
                                    <tr>
                                        <td>{nnhStudent.nnhId}</td>
                                        <td>{nnhStudent.nnhName}</td>
                                        <td>{nnhStudent.nnhAge}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={nnhHandleAddNewStudent}>
                            them moi
                        </button>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default NnhUseState