import React from 'react';
import ReactDom from 'react-dom';

class ControlCheckbox extends React.Component{
	// static defaultProps = {
 //      checked: false
 //   	};
	// static propTypes={
	//  checked: React.PropTypes.bool,
	//  onChange: React.PropTypes.func
	// };
	constructor(props){
		super(props);
		this.state = {
			checked: this.props.checked
		}
	}
	// componentDidMount(){
	// 	let checked = this.props.checked;
	// 	if(checked){
	// 		ReactDom.findDOMNode(this.refs["checkbox1"]).checked= checked
	// 	}
	// }
	handleClick(){
		this.setState({
			checked: !this.state.checked
		});
	}

	render(){
		return (
			<label className="control-container control-checkbox">
			  {this.props.text}
		      <input type="checkbox" ref="checkbox1" checked={this.state.checked} onChange={this.handleClick.bind(this)}/>
		      <div className="control-indicator"></div>
		    </label>
	    );
	}
}

// ReactDom.render(
// 	<ControlCheckbox text="Yes"/>,
// 	document.getElementById('checkboxContainer')
// );
export default ControlCheckbox;