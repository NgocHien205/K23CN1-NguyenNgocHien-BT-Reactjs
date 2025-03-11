import React, { useEffect, useState } from 'react'

function NnhUseEffect() {
    //STATE
    const [nnhCount, setNnhCount] = useState(0);




    //

    useEffect(() => {
        console.log("Day la useEffect mot tham so ");
    });
    //
    //
    //
    const nnhArr = [10, 20, 30, 40];
    const [nnhArray, setNnhArray] = useState(nnhArr);
    useEffect(() => {
        console.log("Day la useEffect 2 tham so,tham so thu hai la mang doi so  phu thuoc nnharray");
    }, [nnhArray]);
    /*-    -*/
    useEffect(() => {
        console.log("Day la useEffect 2 tham so,tham so thu hai la mang rong[] ");
    }, [nnhCount]);
    //
    const nnhHandleAddList = () => {
        setNnhArray([
            ...nnhArray,
            parseInt(Math.random() * 100),
        ])
    }

    return (
        <div className='alert alert-info'>
            <h2>Demo useEffect</h2>
            <h3>Count: {nnhCount}</h3>
            <button onClick={() => setNnhCount(nnhCount + 2)}>Click here</button>

            <div>
                <h3>Array: {nnhArray.toString()}</h3>
                <button onClick={nnhHandleAddList} >them</button>
            </div>
        </div>
    )
}

export default NnhUseEffect