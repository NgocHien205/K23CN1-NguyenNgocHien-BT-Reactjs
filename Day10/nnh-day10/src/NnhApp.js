import React from 'react'
import NnhUseState from './components/NnhUseState'
import NnhUseEffect from './components/NnhUseEffect'

export default function NnhApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React Hook</h1>
        <hr/>
        <NnhUseState />
        <hr/>
        <NnhUseEffect />
        
    </div>
  )
}
