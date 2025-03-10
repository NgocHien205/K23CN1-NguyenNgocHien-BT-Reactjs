import React from 'react'
import NnhUseState from './components/NnhUseState'
import NnhUseStateListObject from './components/NnhUseStateListObject'
import NnhUseEflect from './components/NnhUseEffect'

function NnhApp() {
  return (
    <div className='container border mt-3'>
      <h1> React Hook</h1>
      <hr />

      <NnhUseState />
      <hr />
      <NnhUseStateListObject />
      <hr />
      <NnhUseEflect />
    </div>
  )
}

export default NnhApp