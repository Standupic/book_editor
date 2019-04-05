import React,{Component} from 'react';
import {connect} from 'react-redux';
import BookEdit from './bookEdit';
import {deleteBook} from '../action/';

class Book extends Component {
	state = {
		edit: false
	}
	toggle=()=>{
		this.setState({
			edit: !this.state.edit
		})
	}
	deleteBook=(id)=>{
		this.props.delete(id)
	}
	render(){
		const {edit} = this.state;
		const {book} = this.props;
		return(
			<React.Fragment>
				{!edit ? 
					<div className="item">
						<div className="wrap_content">
							<img src="img/1.jpg" alt="" width="120" height="204"/>
							<div className="description">
								<h2>{book.title}</h2>
								<h3><em>Autor: </em>{`${book.first_name} `+`${book.last_name}`}</h3>
								<p><em>Year: </em> {!book.date ? "unspecified" : book.date}</p>
								<p><em>Pages: </em> {book.pages}</p>
								<p><em>Published: </em> {!book.release ? "unspecified" : book.release}</p>
								<p><em>ISBN: </em>{!book.ISBN ? "unspecified" : book.ISBN}</p>
								<p><em>Publishing house: </em>{!book.publish_house ? "unspecified" : book.publish_house}</p>
								<p className="wrap_button">
									<button className="edit" onClick={()=>{this.toggle()}}>Edit</button>
									<button className="deleteButton" onClick={(id)=>{this.deleteBook(book.id)}}>Delete</button>
								</p>

							</div>
						</div>
					</div>
					:
					<BookEdit id={book.id} toggle={this.toggle}/>
			}
			</React.Fragment>
		)
	}
}

export default connect(null,{delete: deleteBook})(Book)