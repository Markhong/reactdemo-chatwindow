import React from 'react';
import ReactDom from 'react-dom';

class Rate extends React.Component{
	// static defaultProps = {
	//     starLength: 5
	// }
	// static propTypes = {
	// 	starLength: React.PropTypes.number
	// }
	constructor(props){
		super(props);
		this.state = {
			starClicked: false,
			starParentClicked: false,
			rateVal: props.rateVal,
		}
	}
	hoverChange(rateVal){
		if(!this.state.starClicked){
			this.setState({
				rateVal: rateVal
			})
		}
		
	}

	clickChange(rateVal){
		this.setState({
			starClicked: true,
			rateVal: rateVal
		});

		this.props.controlRateChange(rateVal);
	}
	
	starClickChange(){
		let _this = this;
		_this.setState({
			starParentClicked: true
		});

		setTimeout(function(){
			_this.setState({
				starParentClicked: false
			});
		},1000)
	}

	render(){
		
		let nodeChild=[];
		for(let i=1; i<=this.props.starLength; i++){
			if(this.props.ifCanHalfClick){
				nodeChild.push(
						<div key={i} 
							 className={this.state.rateVal>=i?"star animate":"star"} 
							 onClick={this.starClickChange.bind(this)}>
							<span className={(this.state.rateVal>=i)?"full star-colour":"full"} 
							      data-value={i} 
							      onMouseOver={this.hoverChange.bind(this, i)} 
							      onClick={this.clickChange.bind(this,i)}></span>
							<span className={(this.state.rateVal>=i-0.5)?"half star-colour":"half"} 
								  data-value={i-0.5} 
								  onMouseOver={this.hoverChange.bind(this, i-0.5)} 
								  onMouseOut={i==1?this.hoverChange.bind(this, "0"):""} 
								  onClick={this.clickChange.bind(this,i-0.5)}></span>
							<span className={(this.state.starParentClicked&&(this.state.rateVal>(i-1)&&this.state.rateVal<=i))
											 ?"selected is-animated pulse"
											 :"selected"}></span>
						</div>
				)
			}
			else{
				nodeChild.push(
						<div key={i} 
							 className={this.state.rateVal>=i?"star animate":"star"} 
							 onClick={this.starClickChange.bind(this)}>

							<span className={(this.state.rateVal>=i)?"full star-colour":"full"} 
							      data-value={i} 
							      onMouseOver={this.hoverChange.bind(this, i)}
							      onMouseOut={i==1?this.hoverChange.bind(this, "0"):""}  
							      onClick={this.clickChange.bind(this,i)}></span>
							
							<span className={(this.state.starParentClicked&&(this.state.rateVal>(i-1)&&this.state.rateVal<=i))
											 ?"selected is-animated pulse"
											 :"selected"}></span>
						</div>
				)
			}
		}
				
		return (
			<div className="rating" data-vote="0">
				{nodeChild}
			</div>
		)
	}
}

Rate.defaultProps = {
	starLength: 5
}
Rate.propTypes = {
	// starLength: React.PropTypes.number
	starLength: React.PropTypes.number.isRequired
}
export default Rate;