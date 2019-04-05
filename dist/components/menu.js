import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => (
    <div className="nav">
      <ul>
        <a><Link to='/'>Home</Link></a>
        <a><Link to='/create'>Create book</Link></a>
        <a><Link to='/bookList'>List book</Link></a>
      </ul>
    </div>
)

export default Menu;