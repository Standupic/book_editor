import React , {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {isIsbn} from './helper';
import {required,
		maxLength30,
		maxLength20,
		number,
		pages,
		release,
		dateValidate,
		ISBN
	} from './validate'

const renderField = ({
	input,
	label,
	type,
	meta: {touched,error}
})=>(
  <div>
    <label>{label}</label>
    <div className="wrap_input">
      <input {...input} className="style_input" placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const Form  = props => {
	const {handleSubmit, id, toggleEdit} = props
	return(
		<div className="wrap_form">
			<form onSubmit={handleSubmit}>
				<div className="wrap_items">
					<p>
						<Field name="title"
							   component={renderField}
							   type="text"
							   label="Title"
							   validate={id ? [maxLength30] : [required,maxLength30]}
						/>
					</p>
					<p>
						<Field name="first_name"
							   component={renderField}
							   type="text"
							   label="First name"
							   validate={id ? [maxLength30] : [required,maxLength20]}
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="last_name"
							type="text"
							label="Last name"
							validate={id ? [maxLength20] : [required,maxLength20]}

						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="pages"
							type="number"
							label="Pages"
							validate={id ? [pages] : [required,pages]}
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="publish_house"
							type="text"
							label="Publishing house"
							validate={[maxLength30]}
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="release"
							type="number"
							label="Release"
							validate={[release]}
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="date"
							type="date"
							label="Date in circulation"
							validate={[dateValidate]}
						/>
					</p>
					<p>
						<Field
							component={renderField}
							name="ISBN"
							type="text"
							label="ISBN"
							validate={[ISBN]}
						/>
					</p>
				</div>
				{
					id ? 
					<p className="wrap_button">
						<button className="edit" type="submit">Edit</button>
						<button className="cancel" onClick={toggleEdit}>Cancel</button>
					</p>
					:
					<button type="submit" className="button">Create</button>
				}
			</form>
		</div>
	)
}

export default reduxForm({
	form: "create",
})(Form)

