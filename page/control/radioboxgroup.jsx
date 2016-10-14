import React from 'react';
import ReactDom from 'react-dom';

class ControlRadioBoxGroup extends React.Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	radioOption:props.radioOption
		// }
	}

	handleClick(index){
		// const _radioOption = this.state.radioOption;

  //       for(let r=0; r < _radioOption.length; r++){
  //           _radioOption[r].checked = false
  //       }

  //       _radioOption[index].checked = true;
  //       this.setState({radioOption: _radioOption});

  //       let radioVal="";
  //       _radioOption.map((item, index) => {
  //       	if(item.checked){
  //       		radioVal= item.value;
  //       		return;
  //       	}
  //       });
  //       this.props.controlRadioBoxChange(radioVal);
  		this.props.controlRadioBoxChange(this.refs["radio"+index].value);

	}

	render(){
		return (
			<div >
                {this.props.radioOption.map((item, index) => {
                    return (
                        <label key={index} className={this.props.block?"control-container control-radio control-radio-block":"control-container control-radio"}>
							{item.text}
					      	<input type="radio" 
					      		   ref={"radio"+index}
					      		   name={item.name} 
					      		   onChange={this.handleClick.bind(this, index)} 
					      		   disabled={this.props.disabled} 
					      		   value={item.value} 
					      		   defaultChecked={this.props.defaultVal.indexOf(item.value)!==-1} />
					      	<div className="control-indicator"></div>
					    </label>
                    )
                })}
            </div>

			
		);
	}
}


export default ControlRadioBoxGroup;