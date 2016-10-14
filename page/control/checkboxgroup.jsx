import React from 'react';
import ReactDom from 'react-dom';


// class CheckBox extends React.Component{  
//     // componentDidMount() {
//     //     const _options = this.props.options;
//     //     for(let i=0; i<_options.length; i++){
//     //         if(_options[i].checked){
//     //             ReactDOM.findDOMNode(this.refs['checkbox-'+ i]).className = 'ui-checkbox on';
//     //         }else{
//     //             ReactDOM.findDOMNode(this.refs['checkbox-'+ i]).className = 'ui-checkbox';
//     //         }
//     //     }
//     // }
//     constructor(){
//     	super();
//     }
//     render(){
//         return(
//             {
            	
//             }
//         )
//     }
// }

class ControlCheckboxGroup extends React.Component{
	constructor(props){
        super(props);
        // this.state={
        //     checkboxOption: props.checkboxOption
        // }
    }
    handleChangeCheckBox(index){
        //let _checkboxOption = this.props.checkboxOption;

        // if(_checkboxOption[index].checked){
        //     _checkboxOption[index].checked = false;
        // }else{
        //     _checkboxOption[index].checked = true;
        // }

        // // this.setState({checkboxOption: _checkboxOption});

        let checkedVal="";
        // _checkboxOption.map((item, index) => {
        //     if(item.checked){
        //         checkedVal+=item.value+","
        //     }
        // });
        for(let i in this.refs){
            if(this.refs[i].checked){
                checkedVal+=this.refs[i].value+","
            }
        }
        // if(this.refs["inputcheckbox"+index].checked){
        //     checkedVal+=this.refs["inputcheckbox"+index].value+","
        // }
        this.props.controlCheckboxChange(checkedVal);
    }

    render(){
        return(
        	<div>
            {
            	this.props.checkboxOption.map((item,index) => {
                return (
                        <label key={index} className={this.props.block?"control-container control-checkbox control-checkbox-block":"control-container control-checkbox"}>
                        	{item.text}
                            <input type="checkbox" 
                                   ref={"inputcheckbox"+index} 
                                   disabled={this.props.disabled} 
                                   value={item.value} 
                                   onChange={this.handleChangeCheckBox.bind(this,index)}
                                   checked={this.props.defaultVal.indexOf(item.value)!==-1} />
                            <div className="control-indicator"></div>
                        </label>
                	)
            	})
            }
            </div>
        )
    }
}

// ReactDom.render(
// 	<ControlCheckbox text="Yes"/>,
// 	document.getElementById('checkboxContainer')
// );
export default ControlCheckboxGroup;