import React, { Component } from 'react';

class NnhFrom extends Component {
    render() {
        let {RenderNnhStudent} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={RenderNnhStudent.nnhId}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={RenderNnhStudent.nnhStudentName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={RenderNnhStudent.nnhAge}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={RenderNnhStudent.NnhGender}>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" value={RenderNnhStudent.nnhBirthday}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control"  value={RenderNnhStudent.nnhBirthPlace}>
                                    <option value={"HN"}>Hà Nội</option>
                                    <option value={"TpHCM"}>TP. Hồ Chí Minh</option>
                                    <option value={"DN"}>Đà Nẵng</option>
                                    <option value={"TB"}>Thái Bình</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" defaultValue={RenderNnhStudent.nnhAddress}   />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NnhFrom;