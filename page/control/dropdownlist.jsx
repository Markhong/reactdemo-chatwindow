import React from 'react';
import ReactDom from 'react-dom';

class dropdownlist extends React.Component{
	constructor(props){
		super(props);
	}

	handleDropdownChange(event){
        this.props.controlDropdownChange(event.target.value);
	}

	render(){
		return (
			<div className="select">
				<select value={this.props.defaultVal} onChange={this.handleDropdownChange.bind(this)}>
					{
						this.props.dropdownOption.map((item, index) => {
							return (
								<option key={index} value={item.value}>{item.text}</option>
							)
						})
					}
				</select>
				<div className="select-arrow"></div>
			</div>
		)
	}
}

export default dropdownlist;