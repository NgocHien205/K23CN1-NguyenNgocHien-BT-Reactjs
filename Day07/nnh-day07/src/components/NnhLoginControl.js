import React from 'react'
import NnhLoginComp from './NnhLoginComp'
import NnhLogoutComp from './NnhLogoutComp'

export default function NnhLoginControl(props) {
    const nnhElement = props.isLoggedIn ? <NnhLogoutComp /> : <NnhLoginComp />
  return (
    <div>
        {nnhElement}
    </div>
  )
}
