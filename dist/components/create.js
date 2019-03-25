import React,{Component} from 'react'
import Field from './field';

class Create extends Component {
	state = {
		fields: {
			title: '',
			first_name: '',
			last_name: '',
			page: '',
			publish_house: '',
			release: '',
			date: '',
			isbn: '',
			picture: '',
		},
		fieldErrors: {},
		books: []
	};

	isbn13=(str)=>{
	var sum,num,result;
	str = str.replace(/[^0-9X]/gi, '');

	if(str.length != 13) return false;

	if(str){
		sum = 0;
		for(let i =0; i < 12; i++){
		num = parseInt(str[i]);
		(i % 2 == 1) ? (sum += 3 * num) : sum += num;
		}
	}
	result = (10 - (sum % 10)) % 10;
	return result == str[str.length-1];
  	}

 	isbn10=(str)=>{
		var sum,num,result,long;
		str = str.replace(/[^0-9X]/gi, '');

		if(str.length != 10) return false;

		if(str){
			long = 10;
			sum = 0;
			for(let i = 0; i < 9; i++){
			num = parseInt(str[i]);
			sum += long*num;
			long --;
			}
			result = 11 - (sum % 11);
			if(result == 10) result = "X";
		}
		return result == str[str.length-1].toUpperCase()
  	}

	isIsbn=(str)=> {
		if(this.isbn10(str) || this.isbn13(str)){
		  return true
		}else{
		  return false
		}  
  	}
  
	onFormSubmit = evt => {
	    const books = this.state.books;
	    const book = this.state.fields;

	    evt.preventDefault();
	    console.log(this.validate())
	    if (this.validate()) return;

	    this.setState({
	      books: books.concat(book),
	      fields: {
	        title: '',
	        first_name: '',
	        last_name: '',
	        page: '',
	        publish_house: '',
	        release: '',
	        date: '',
	        isbn: '',
	        picture: '',
	      }
	    });
  	};

	onInputChange = ({name, value, error}) => {
		const fields = Object.assign({}, this.state.fields);
		const fieldErrors = Object.assign({}, this.state.fieldErrors);
		fields[name] = value;
		fieldErrors[name] = error;

		this.setState({fields, fieldErrors});
  	};

	validate = () => {
		const book = this.state.fields;
		const fieldErrors = this.state.fieldErrors;
		const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

		if (!book.title) return true;
		if (!book.first_name) return true;
		if (!book.last_name) return true;
		if (!book.page) return true;
		if (errMessages.length) return true;
		return false;
  	};
	render(){
		return(
			<React.Fragment>
				<div className="wrap_form">
					<form onSubmit={this.onFormSubmit}>
					<div className="block">
					<p>
						<label for="title">Title</label>
						<Field
							placeholder="title"
							name="title"
							value={this.state.fields.title}
							onChange={this.onInputChange}
							validate={val => ((val.length > 30) ? 'the title should be less than 30 character':(val === "") ? "The field title should be fill" : false)}
							/>
					</p>

					<p>
						<label for="first_name">First name</label>
						<Field
							placeholder="first name"
							name="first_name"
							value={this.state.fields.first_name}
							onChange={this.onInputChange}
							validate={val => ((val.length > 20) ? 'the first name should be less than 20 character':(val === "") ? "The field first name should be fill" : false)}
							/>
					</p>
					<p>
						<label for="last_name">Last name</label>
						<Field
							placeholder="last name"
							name="last_name"
							value={this.state.fields.last_name}
							onChange={this.onInputChange}
							validate={val => ((val.length > 20) ? 'the last name should be less than 20 character':(val === "") ? "The field first name should be fill" : false)}
						/>
					</p>
					<p>
						<label for="pages">Pages</label>
						<Field
							type="number"
							placeholder="page"
							name="page"
							value={this.state.fields.page}
							onChange={this.onInputChange}
							validate={val => ((val >= 10000 || val < 0 ) ? 'the page should not be more than 10000 and less than 0':(val === "")? 'The field page should be fill': false)}
							/>
					</p>
					<p>
						<label for="published">Publishing house</label>
						<Field
							type="string"
							placeholder="publish_house"
							name="publish_house"
							value={this.state.fields.publish_house}
							onChange={this.onInputChange}
							validate={val => ((val.length < 30) ? false : 'the field publish house should not be more than character')}
							/>
					</p>
					<p>
						<label for="release">Release</label>
						<Field
							type="number"
							placeholder="release"
							name="release"
							value={this.state.fields.release}
							onChange={this.onInputChange}
							validate={val => ((val >= 1800 || val === "") ? false : 'the year should not be earlier than 1800')}
							/>
					</p>
					<p>
						<label for="release">Date in circulation</label>
						 <Field
				            type="date"
				            placeholder="date"
				            name="date"
				            value={this.state.fields.date}
				            onChange={this.onInputChange}
				            validate={val => ((Date.parse(val) > -5364748800000 || val === "") ? false : 'the date should not be earlier than 01.01.1800')}
				          />
					</p>
					<p>
						<label for="isbn">ISBN</label>
						<Field
							type="string"
							placeholder="isbn"
							name="isbn"
							value={this.state.fields.isbn}
							onChange={this.onInputChange}
							validate={val => ((this.isIsbn(val) || val === "") ? false : 'It is not valide isbn')}
							/>
					</p>
					</div>
						<label for="picture">Picture</label>
					<Field
						type="file"
						placeholder=""
						name="picture"
						value={this.state.fields.picture}
						onChange={this.onInputChange}
						validate={val => val ? false : 'fuck where is pucture'}
					/>
					
					<input type="submit" className="button" value="Create" disabled={this.validate()} />
					</form>
				</div>
			</React.Fragment>
		)
	}
}

module.exports = Create;