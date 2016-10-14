import React from 'react';
import ReactDom from 'react-dom';

export default class MessageContent extends React.Component{
	constructor(){
		super();
	}
	scrollToBottom(){
		
	}

	componentDidMount(){
		// this.refs.messagecontainer.scrollTop = this.refs.messagecontainer.scrollHeight;
		// alert(this.refs.messagecontainer.scrollHeight);
	}
	componentDidUpdate(){
		let messagecontainer = this.refs.messagecontainer;
		messagecontainer.scrollTop = messagecontainer.scrollHeight;
	}
	render(){
		let messageContent=[];
		this.props.propsMessage.map((item, index) => {
			if(item.type==="0"){
				messageContent.push(<div key={index} className="chat-operator-message clearfix">
										<div className="chat-operator-name">
											{item.name}
										</div>
										<div className="chat-operator-content">
											{item.content}
										</div>
										<div className="chat-operator-time">
											{item.time}
										</div>
									</div>);
			}
			else{
				messageContent.push(<div key={index} className="chat-visitor-message clearfix">
										<div className="chat-visitor-name">
											{item.name}
										</div>
										<div className="chat-visitor-content">
											{
												item.content.split('\n').map((line,index) => (
														<div key={index}>{line}</div>
													)
												)
											}
										</div>
										<div className="chat-visitor-time">
											{item.time}
										</div>
									</div>);
			}
		})
		return (

			<div className="messagecontainer" ref="messagecontainer">
				<div className="chat-system-message">
					Operator Mark has joined the chat.
				</div>
				{messageContent}
			</div>
		)
	}
}