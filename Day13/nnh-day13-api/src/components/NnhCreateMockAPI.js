import React, { useState } from 'react'
import axios from 'axios'

export default function NnhCreateMockAPI() {
 // khởi tạo state
 const [nnhFullName,setNnhFullName] = useState('')
 const [nnhAge,setNnhAge] = useState(0)
 const [nnhActive,setNnhActive] = useState(true)

 // api post
 const nnhCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/nnh_users";

 // khi submit form
 const nnhHandleSubmit = (event)=>{
     event.preventDefault();
     console.log("nnhActive:",nnhActive);
     let nnhNewUser = {nnhFullName,nnhAge,nnhActive};
     console.log(nnhNewUser);

     // ghi dữ liệu vào api
     axios
         .post(nnhCreateUserApi, nnhNewUser)
         .then((nnh_response)=>{
             
         })
     
 }


return (
 <div className='alert alert-info'>
 <h2>Thêm mới users</h2>
 <hr/>
 <form>
     <div className=' mb-1'>
         <label for="nnhFullName">Full Name</label>
         <input type='text' name='nnhFullName' id="nnhFullName" 
             value={nnhFullName}
             onChange={(ev)=>setNnhFullName(ev.target.value)} />
     </div>
     <div className=' mb-1'>
         <label for="nnhAge">Age</label>
         <input type='number' name='nnhAge' id="nnhAge" 
             value={nnhAge}
             onChange={(ev)=>setNnhAge(ev.target.value)} />
     </div>
     <div className=' mb-1'>
         <label for="nnhActive">Active</label>
         <input type='radio' name='nnhActive' id="nnhActive_hd" value={'true'} 
             onChange={(ev)=>setNnhActive(ev.target.value)} />
             <label for="nnhActive_hd"> Hoạt động</label>
         <input type='radio' name='nnhActive' id="nnhActive_kh" value={'false'} 
             onChange={(ev)=>setNnhActive(ev.target.value)}/>
             <label for="nnhActive_kh"> Khóa</label>
     </div>
     <button onClick={nnhHandleSubmit}>Create</button>
 </form>
</div>
  )
}
