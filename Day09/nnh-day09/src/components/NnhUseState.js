import React, { useState } from 'react'

function NnhUseState() {
    // Tạo state  là count  và hàm cập nhật state là setCount
    const [count, setCount] = useState(0);
    //Hàm xử lý sự kiện tăng giá trị của count
    const nnhHandleTang=()=>{
        setCount(count + 13);
    }
    //State là mảng list 
    const danh_sach = [100,120,130,200];
    //Khởi tạo State
    const [list,setList] = useState(danh_sach);
    //Hàm xử lý sự kiện, thêm phần tử ngẫu nhiên vào danh sách
    const nnhHandleAddNewRandom = ()=>{
    //     setList(prev =>{
    //         return[
    //             parseInt(Math.random()*100)
    //         ]          
    //     })
    setList([
        ...list,
        parseInt(Math.random()*100)
    ])
    }
    return (
        <div className='alert alert-info'>
            <h3>sử dụng useState</h3>
            <div>
                <p><h2>Count:{count}</h2></p>
                <button onClick={nnhHandleTang}>tăng</button>
                <button onClick={()=>setCount(count - 1)}>Giảm</button>
                <button onClick={()=>setCount(0)}>bật lại</button>
            </div>
            <div>
                <h3>list: {list.toString()}</h3>
                <button onClick={nnhHandleAddNewRandom}>Add New (random)</button>
            </div>
        </div>
    )
}

export default NnhUseState