import React , {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {isIsbn} from './helper';
// import FormSubmit from '../decorators/formSubmit';
// import renderField from './validate/renderField';

const validate = val => {
	const error = {}
	if(!val.title){
		error.title = "Required"
	}else if(val.title.length > 30){
		error.title = "Should be less than 30 character"
	}
	if(!val.first_name){
		error.first_name = "Required"
	}else if(val.first_name.length > 20){
		error.first_name = "Should be less than 20 character"
	}
	if(!val.last_name){
		error.last_name = "Required"
	}else if(val.last_name.length > 20){
		error.last_name = "Should be less than 20 character"
	}
	if(!val.pages){
		error.pages = "Required"
	}else if(val.pages >= 10000 || val.pages < 0){
		error.pages = "shouldn't be more than 10000 or 0"
	}
	if(val.publish_house < 30){
		error.publish_house = "Should be less than 30 character"
	}
	if(val.release < 1800){
		error.release = "Shouldn't be earlier than 1800"
	}
	if(Date.parse(val.date) < -5364748800000){
		error.date = "shouldn't be earlier than 01.01.1800'"
	}
	if(!isIsbn(val.ISBN)){
		error.ISBN = "It is not valide isbn"
	}
	return error;
}

const renderField = ({
	input,
	label,
	type,
	meta: {touched,error}
})=>(
  <div>
    <label>{label}</label>
    <div className="wrap_input">
      <input {...input} className="styleInput" placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const Form  = props => {
	const {handleSubmit} = props
	return(
		<div className="wrap_form">
			<form onSubmit={handleSubmit}>
				<div className="block">
					<p>
						<Field name="title"
							   component={renderField}
							   type="text"
							   label="Title"
						/>
					</p>
					<p>
						<Field name="first_name"
							   component={renderField}
							   type="text"
							   label="First name"
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="last_name"
							type="text"
							label="Last name"

						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="pages"
							type="number"
							label="Pages"
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="publish_house"
							type="text"
							label="Publishing house"
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="release"
							type="number"
							label="Release"
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="date"
							type="date"
							label="Date in circulation"
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="ISBN"
							type="text"
							label="ISBN"
						/>
					</p>
				</div>
				<button type="submit" className="button">Create</button>
			</form>
		</div>
	)
}

export default reduxForm({
	form: "create",
	validate
})(Form)

