import React, { NNHUseState } from "react";
import NNHAccountList from "./NNHAccountList";
import NNHAccountAdd from "./NNHAccountAdd";

const NNHApp = () => {
    const [NNHaccounts, NNHsetAccounts] = NNHUseState([
        { NNHid: "23100003333", NNHname: "Nguyễn Ngọc Hiến", NNHemail: "hoangnn@example.com", NNHamount: 1000 },
        { NNHid: "23000124", NNHname: "Trần Tiến Anh", NNHemail: "anhtr@example.com", NNHamount: 2000 },
        { NNHid: "23000125", NNHname: "Phạm Văn Bảo", NNHemail: "baopv@example.com", NNHamount: 1500 }
    ]);

    const NNHaddAccount = (NNHnewAccount) => {
        NNHsetAccounts([...NNHaccounts, NNHnewAccount]);
    };

    return (
        <div>
            <h1>Quản lý tài khoản</h1>
            <NNHAccountAdd NNHaddAccount={NNHaddAccount} />
            <NNHAccountList NNHaccounts={NNHaccounts} />
        </div>
    );
};

export default NNHApp;