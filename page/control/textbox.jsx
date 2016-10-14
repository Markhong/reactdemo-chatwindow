import React from 'react';
import ReactDom from 'react-dom';

class ControlTextBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// value: props.value,
			className: "control-input"
		}
	}
	
	handleChange(event){
		this.setState({
			// value: event.target.value,
			className: this.props.required?(event.target.value?"control-input":"control-input error"):""
		});

		this.props.controlTextBoxChange(event.target.value);
	}

	render(){
		return(
			<input type="text" 
				   disabled={this.props.disabled} 
				   placeholder={this.props.placeholder} 
				   defaultValue={this.props.value} 
				   className={this.state.className} 
				   onChange={this.handleChange.bind(this)}/>
		);
		
	}
}

// ReactDom.render(
// 	<ControlTextBox required="required"/>,
// 	document.body
// )

export default ControlTextBox;