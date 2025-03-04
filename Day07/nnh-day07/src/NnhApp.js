import React, { Component } from 'react'
import NnhRenderCon from './components/NnhRenderCon'
import NnhRenderList from './components/NnhRenderList';
import NnhRenderListStudent from './components/NnhRenderListStudent';

class NnhApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
         <h1>Nguyen Ngoc Hien - Lesson07 - Render condition - Render List Key</h1>
        
        <NnhRenderCon /> 

        <NnhRenderList />

        <NnhRenderListStudent />  
      </div>
    );
  }
}

export default NnhApp;