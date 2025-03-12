import React, { NNHUseState }from 'react'

function NNHAccountAdd({ NNHAccounts, NNHSetAccounts }) {
    const NNHAccountAdd = ({ NNHaddAccount }) => {
        const [NNHid, NNHsetId] = NNHUseState("");
        const [NNHname, NNHsetName] = NNHUseState("");
        const [NNHemail, NNHsetEmail] = NNHUseState("");
        const [NNHamount, NNHsetAmount] = NNHUseState("");
    
        const NNHhandleSubmit = (e) => {
            e.preventDefault();
            NNHaddAccount({ NNHid, NNHname, NNHemail, NNHamount: Number(NNHamount) });
            NNHsetId("");
            NNHsetName("");
            NNHsetEmail("");
            NNHsetAmount("");
        };
    
        return (
            <form onSubmit={NNHhandleSubmit}>
                <h2>Thêm tài khoản mới</h2>
                <input type="text" placeholder="ID" value={NNHid} onChange={(e) => NNHsetId(e.target.value)} required />
                <input type="text" placeholder="Họ và tên" value={NNHname} onChange={(e) => NNHsetName(e.target.value)} required />
                <input type="email" placeholder="Email" value={NNHemail} onChange={(e) => NNHsetEmail(e.target.value)} required />
                <input type="number" placeholder="Số dư" value={NNHamount} onChange={(e) => NNHsetAmount(e.target.value)} required />
                <button type="submit">Thêm</button>
            </form>
        );
    };
}
export default NNHAccountAdd;