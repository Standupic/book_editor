import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {changeDataRange} from '../../action'
import { connect } from 'react-redux'

class DayPickerComponent extends React.Component{
	render(){
		const {dataRange, changeDataRange} = this.props
		const defaultState = {from: null, to: null};
		const {from, to} = dataRange;
		const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
		return(
			<div className="data-range">
				<DayPicker
					selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
					onDayClick={(day) => changeDataRange(DateUtils.addDayToRange(day, dataRange))}
				/>
				<button className="reset">Reset</button>
				{selectedRange}
			</div>
		)
	}
}


export default connect((state)=>({
	dataRange: state.filter.dataRange
}),{changeDataRange: changeDataRange})(DayPickerComponent)