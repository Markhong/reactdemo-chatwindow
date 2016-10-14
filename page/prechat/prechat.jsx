import React from 'react';
import ReactDom from 'react-dom';

import TextBox from '../control/textbox';
// import CheckBox from './control/checkbox';
import CheckBoxGroup from '../control/checkboxgroup';
import RadioBoxGroup from '../control/radioboxgroup';
import Dropdownlist from '../control/dropdownlist';
import Rate from '../control/rate';

class PreChat extends React.Component{
	constructor(){
		super();
		this.state={
			name: "mark",
			department:"lolly",
			productservice:"1,0",
			heardus:"1",
			rate:0
		}
	}
	// controlChange(newName, newProductservice, newHeardus, newDepartment, newRate){
	// 	this.setState({
	// 		name: newName,
	// 		productservice: newProductservice,
	// 		heardus: newHeardus,
	// 		department: newDepartment,
	// 		rate: newRate
	// 	});
	// }
	controlTextBoxChange(newName){
		this.setState({
			name: newName,
		});
	}
	controlCheckboxChange(newProductservice){
		this.setState({
			productservice: newProductservice
		});
	}
	controlRadioBoxChange(newHeardus){
		this.setState({
			heardus: newHeardus
		});
	}
	controlDropdownChange(newDepartment){
		this.setState({
			department: newDepartment
		});
	}
	controlRateChange(newRate){
		this.setState({
			rate: newRate
		});
	}
	render(){
		return (
			<div className="prechat-container">
				<div className="header">
					<div className="header-btn-container">
						<i className="icon-resources icon-resources-minimize"></i>
						<i className="icon-resources icon-resources-close"></i>
					</div>
				</div>
				<div className="prechat-content">
					<div className="chat-system-message">
						We are excited to chat with you! Please fill out the form below so that we can serve you better.
					</div>
					<ul className="formContainer">
						<li>
							<div className="title">Name:</div>
							<TextBox required="required" placeholder="Name" value={this.state.name} controlTextBoxChange={this.controlTextBoxChange.bind(this)}/>
						</li>
						<li>
							<div className="title">Department:</div>
							<Dropdownlist dropdownOption={[{value: 'mark',text: 'Mark'},{value: 'molly',text: 'Molly'},{value: 'lolly',text: 'Lolly'}]}
								defaultVal={this.state.department} 
								controlDropdownChange={this.controlDropdownChange.bind(this)}
							/>
						</li>
						<li>
							<div className="title">Product Service:</div>
							
							<CheckBoxGroup checkboxOption={
															[
																{text:'Yes',value: '1'},
																{text:'No',value: '0'}
															]
														}

							    defaultVal={this.state.productservice} 
							    controlCheckboxChange={this.controlCheckboxChange.bind(this)}/>
						</li>
						<li>
							<div className="title">Have you ever heard of us?</div>
							<RadioBoxGroup radioOption={
															[
																{text:'Yes',value: '1',name: 'radio-name'},
																{text:'No',value: '0',name: 'radio-name'}
															]
														}
							 defaultVal={this.state.heardus}
							 controlRadioBoxChange={this.controlRadioBoxChange.bind(this)}/>
							
						</li>
						<li>
							<Rate rateVal={this.state.rate}
							      starLength={5} 
							      ifCanHalfClick={false}
								  controlRateChange={this.controlRateChange.bind(this)}/>
						</li>
					</ul>
					<label>{this.state.name}</label><br/>
					<label>{this.state.department}</label><br/>
					<label>{this.state.productservice}</label><br/>
					<label>{this.state.heardus}</label><br/>
					<label>{this.state.rate}</label><br/>
				</div>
				<div className="footer">
				</div>
			</div>
		)
	}
};

ReactDom.render(
	<PreChat />,
	document.getElementById('prechat')
);


// var starClicked = false;

// $(function() {

//   $('.star').click(function() {

// 	let	$target = $(this);
//     $target.children('.selected').addClass('is-animated').addClass('pulse');

//     setTimeout(function() {
//       $target.children('.selected').removeClass('is-animated').removeClass('pulse');
//     }, 1000);

//     starClicked = true;
//   })

//   $('.half').click(function() {
//     if (starClicked == true) {
//       setHalfStarState(this)
//     }
//     $(this).closest('.rating').data('vote', $(this).data('value'));
//   })

//   $('.full').click(function() {
//     if (starClicked == true) {
//       setFullStarState(this)
//     }
//     $(this).closest('.rating').data('vote', $(this).data('value'));

//   })

//   $('.half').hover(function() {
//     if (starClicked == false) {
//       setHalfStarState(this)
//     }

//   })

//   $('.full').hover(function() {
//     if (starClicked == false) {
//       setFullStarState(this)
//     }
//   })

// })

// function updateStarState(target) {
//   $(target).parent().prevAll().addClass('animate');
//   $(target).parent().prevAll().children().addClass('star-colour');

//   $(target).parent().nextAll().removeClass('animate');
//   $(target).parent().nextAll().children().removeClass('star-colour');
// }

// function setHalfStarState(target) {
//   $(target).addClass('star-colour');
//   $(target).siblings('.full').removeClass('star-colour');
//   updateStarState(target)
// }

// function setFullStarState(target) {
//   $(target).addClass('star-colour');
//   $(target).parent().addClass('animate');
//   $(target).siblings('.half').addClass('star-colour');

//   updateStarState(target)
// }
