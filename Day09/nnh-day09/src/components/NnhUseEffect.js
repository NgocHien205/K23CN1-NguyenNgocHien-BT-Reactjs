import React, { useEffect, useState } from 'react'

function NnhUseEflect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect (callback)");
  })
  useEffect(() => {
    console.log("useEffect (callback,[]);chi mot lan duy nhat");
  }, [])
  useEffect(() => {
    console.log('count has changed:', count);
  },
  )
  return (
    <div className='alert alert-info'>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)} >Click</button>
    </div>
  )
}

export default NnhUseEflect