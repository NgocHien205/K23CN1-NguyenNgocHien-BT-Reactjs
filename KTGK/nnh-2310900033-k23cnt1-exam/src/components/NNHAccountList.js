import React from 'react'

const NNHAccountList = ({ NNHaccounts }) => {
  return (
      <div>
          <h2>Danh sách tài khoản</h2>
          <ul>
              {NNHaccounts.map((NNHaccount) => (
                  <li key={NNHaccount.NNHid}>
                      {NNHaccount.NNHname} - {NNHaccount.NNHemail} - Số dư: {NNHaccount.NNHamount}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default NNHAccountList