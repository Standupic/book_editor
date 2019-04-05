import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  	<div className="home">
  		<h2>Home</h2> 
  		<p>Hi there! There is BookEdite where you can create your own list's books and manipulate to them.</p>
  		 <p>Link 
  		 <a><Link to='/create'>Create book</Link></a>
  		 to create book and link  
  		 <a><Link to='/bookList'>List book</Link></a> 
  		 to show your list of books.
  		 </p>
  		 <p>You are able to edit book that has been created before.</p>
         <p>Enjoy using!</p>
  	</div>
)

export default Home;