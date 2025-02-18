import NnhClassComp from "./Components/NnhClassComp";
import NnhFuncComp from "./Components/NnhFuncComp";
import NnhFuncComp1 from "./Components/NnhFuncComp1";


function NnhApp() {
  //object
  const users = {
    FullName:'Nguyễn Ngọc Hiến',
    Age:20,
    Phone:"0336076551"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Components -Drops - State </h1>
      <hr/>
    <div className="alert alert-danger">
      <NnhFuncComp name="Nguyễn Ngọc Hiến" address="196 Đại Mỗ" compnay="NTU-CNTTCNTT" />
      <hr/>
      <NnhFuncComp name="Trần Tiến Anh" address="Phú Lãm" compnay="NTU-CNTT"/> 
    </div>
    <div className='alert alert-info'>
      <NnhFuncComp1 renderInfo={users} />
    </div>
      <NnhClassComp/>
      {/* Chuyển dữ liệu từ NnhApp ->xuống NnhClassCompNnhClassComp */}
      <NnhClassComp renderName="K23CNT1" renderUsers={users}/>
  </div>
  );
}

export default NnhApp;
