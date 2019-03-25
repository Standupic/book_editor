import React, {Component} from 'react';

class Field extends Component {

  state = {
    value: this.props.value,
    error: false,
  };

  onChange = evt => {
   
    const name = this.props.name;    
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({value, error});

    this.props.onChange({name, value, error});
  };

  loadPicture = evt =>{
    const name = this.props.name; 
    let value = "";   
    const file = evt.target.files;
    const error = file[0] ? false : "the picture is not loaded";
    if(error){
      this.setState({
        value: "",
        error: error
      })
      return
    }else{
      const reader = new FileReader();
      reader.readAsDataURL(file[0])

      reader.onload=(e)=>{
        value = e.target.result
        this.props.onChange({name, value, error})
        this.setState({value, error});
      }
    }

   

  }

  render() {
    const {type} = this.props
    return (
      <div className={type === "file" ? "upload" : ""}>
        <input
          className={type === "file" ? "" : "styleInput"}
          type={type ? type : null}
          placeholder={this.props.placeholder}
          value={type === "file" ? null : this.state.value}
          onChange={type === "file" ? this.loadPicture : this.onChange}
        />
        <span style={{color: 'red'}}>{this.state.error}</span>
      </div>
    );
  }
};

Field.getDerivedStateFromProps=(nextProps)=>{
    return {value: nextProps.value}
}
// create separate component for fucking picture image) 

module.exports = Field;