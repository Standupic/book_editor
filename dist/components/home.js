import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => (
  	<div className="home">
  		<h2>Home</h2> 
  		<p>Hi there! There is BookEdite where you can create your own list's books and manipulate to them.</p>
  		 <p>Link 
  		 <NavLink to='/create'>Create book</NavLink>
  		 to create book and link  
  		 <NavLink to='/bookList'>List book</NavLink>
  		 to show your list of books.
  		 </p>
  		 <p>You are able to edit book that has been created before.</p>
         <p>Enjoy using!</p>
  	</div>
)

export default Home;