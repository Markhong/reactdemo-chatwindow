import React from 'react';
import ReactDom from 'react-dom';

import MessageContent from '../control/MessageContent';
import ChatWindowInput from '../control/chatwindowInput';

class ChatWindow extends React.Component{
	constructor(){
		super();
		this.state = {
			message: [
						{
							type:"0",//operator
							name:"Mark",
							content: "Hello, how may I help you?",
							time: new Date().getHours()+":"+new Date().getMinutes(),
						},
						{
							type:"1",//visitor
							name:"Visitor",
							content: "I have a question about your product.",
							time: new Date().getHours()+":"+new Date().getMinutes(),
						}
					 ]
		}
	}
	
	sendHandle(newMessage){
		let newMins = 0;
		let newTime = newMessage[0].time.split(":");
		newMins = newTime[1];

		let latestMins = 0;
		let latestTime = this.state.message[this.state.message.length-1].time.split(":");
		latestMins = latestTime[1];

		let newArrayMessage;
		if ((newMins-latestMins)==0) {
			this.state.message[this.state.message.length-1].content+="\n"+newMessage[0].content;
			this.setState({
				message: this.state.message
			})
		}
		else{
			newArrayMessage = this.state.message.concat(newMessage);
			this.setState({
				message: newArrayMessage
			})
		}
		
		
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div className="chatwindow-container">
				<div className="header clearfix">
					<img src="../../build/css/avatar.jpg" className="avatar" alt="" width="50" height="50" />
					<div className="operatorinfo">
						<div className="name">Mark</div>
						<div className="title">Sales</div>
					</div>
					<div className="header-btn-container">
						<i className="icon-resources icon-resources-minimize"></i>
						<i className="icon-resources icon-resources-close"></i>
					</div>
				</div>
				<MessageContent propsMessage={this.state.message}/>
				<ChatWindowInput className="sspp" name="mark2016" value="" sendChange={this.sendHandle.bind(this)}/>
				<div className="footer">
					<i className="icon-resources icon-resources-email"></i>
					<i className="icon-resources icon-resources-sendfile"></i>
					<i className="icon-resources icon-resources-rate"></i>
					<i className="icon-resources icon-resources-voice"></i>
					<i className="icon-resources icon-resources-rename"></i>
					<i className="icon-resources icon-resources-print"></i>
				</div>
			</div>
		)
	}
}


ReactDom.render(
	<ChatWindow />,
	document.getElementById('chatwindow')
);