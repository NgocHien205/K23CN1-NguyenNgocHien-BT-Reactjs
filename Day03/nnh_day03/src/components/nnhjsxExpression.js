import React from 'react'

export default function NnhjsxExpression() {
  // biến
    const name="Nguyễn Ngọc Hiến";
    // biến đối tượng
    const user = {
        firstName:"Hiến",
        lastNamee:"Nguyễn"
    }
    // hàm
    const fullName=(user)=>{
        return user.firstName + ' ' +user.lastNamee;
    }
    // element
    const element =(
        <div>
            {/*bieu thuc jsx */}
            <h2> {fullName(user)} </h2>
            <hr/>
            <h3>welcom to ,{name}</h3>
        </div>
    );

    //ham
    const sayWelcome = (name)=>{
        if(name) {
            return <h3>welcome to ,{name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT1</h3>
        }
    }
    return (  
    <div>
        <h1> nnh -JSX Expression</h1>
        {/* su dung bien element  */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyen Ngoc Hien")}
    </div>
  )
}
