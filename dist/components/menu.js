import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => (
    <div className="nav">
      <ul>
        <NavLink activeStyle={{background: '#EB6864', color: "white"}} exact to='/'>Home</NavLink>
        <NavLink activeStyle={{background: '#EB6864', color: "white"}} to='/create'>Create book</NavLink>
        <NavLink activeStyle={{background: '#EB6864', color: "white"}} to='/bookList'>List book</NavLink>
      </ul>
    </div>
)

export default Menu;