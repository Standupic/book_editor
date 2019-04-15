import React from 'react'
import DayPickerComponent from './dayPicker'
import Filter from './filter'

const Filters = () =>{
	return(
		<div className="wrap_filters">
			<Filter/>
			<DayPickerComponent/>
		</div>
	)
}

export default Filters