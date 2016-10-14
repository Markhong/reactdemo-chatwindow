import React from 'react';
import ReactDom from 'react-dom';

class ChatWindowInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			textareaValue: props.value
		}
	}

	handleChange(event){
		this.setState({
			textareaValue: event.target.value 
		});
	}
	sendMessage(){
		if(this.refs.chatinput.value){
			let newMessage = [{
				type:"1",
				name:"Visitor",
				content: this.refs.chatinput.value,
				time: new Date().getHours()+":"+new Date().getMinutes(),
			}];
			this.props.sendChange(newMessage);

			this.setState({
				textareaValue: ""
			});
			this.refs.chatinput.focus();

		}
	}
	keyDownSendMessage(e){
		var eve = e || window.event;
		if(eve.keyCode == 13){
			eve.preventDefault();
			this.sendMessage();
		}
	}
	componentDidMount(){
		// this.props.scrollToBottom();
	}
	render(){

		return (
			<div className={this.state.textareaValue?"messageinput chatinput-focus":"messageinput"}>
				<textarea id="chatinput" 
						  ref="chatinput" 
						  value={this.state.textareaValue} 
						  onChange={this.handleChange.bind(this)}
						  onKeyDown={this.keyDownSendMessage.bind(this)}>
			    </textarea>
				<div className="messagesend" onClick={this.sendMessage.bind(this)}>
				     <i className="icon-resources icon-resources-send"></i>
				</div>
			</div>
		)
	}
}

export default ChatWindowInput;