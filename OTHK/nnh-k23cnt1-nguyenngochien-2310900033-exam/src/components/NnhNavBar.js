import React from 'react'
import {Link} from 'react-router-dom'

export default function NnhNavBar() {
  return (
    <nav>
        <Link to='/'>Home</Link> |
        <Link to='/NnhListUser'>Danh Sach User</Link> |
        <Link to='/NnhCreateUser'>Them Moi User</Link> |
    </nav>
  )
}
