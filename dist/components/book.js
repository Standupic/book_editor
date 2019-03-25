import React,{Component} from 'react'
import BookEdit from './bookEdit'

class Book extends Component {
	state = {
		edit: true
	}
	render(){
		const {edit} = this.state;
		const {book} = this.props;
		return(
			<React.Fragment>
				{!edit ? 
					<div className="item">
						<div className="delete">&times;</div>
						<div className="wrap_content">
							<img src="img/1.jpg" alt="" width="120" height="204"/>
							<div className="description">
								<h2>{book.title}</h2>
								<h3>{book.autor}</h3>
								<p><em>Year: </em> {book.year}</p>
								<p><em>Pages: </em> {book.pages}</p>
								<p><em>Published: </em> {book.published}</p>
								<p><em>ISBN: </em>{book.isbn}</p>
								<p><em>Publishing house: </em>{book.published_house}</p>
								<button>Edit</button>
							</div>
						</div>
					</div>
					:
					<BookEdit/>
			}
			</React.Fragment>
		)
	}
}

module.exports = Book;