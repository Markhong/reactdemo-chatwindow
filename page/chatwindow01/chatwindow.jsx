import React from 'react';
import ReactDom from 'react-dom';

import ChatWindowInput from '../control/chatwindowInput';

class ChatWindow extends React.Component{
	constructor(){
		super();
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
				<div className="messagecontainer">
					<div className="chat-system-message">
						Operator Mark has joined the chat.
					</div>
					<div className="chat-operator-message clearfix">
						<div className="chat-operator-name">
							Mark
						</div>
						<div className="chat-operator-content">
							Hello, how may I help you?
						</div>
						<div className="chat-operator-time">
							03:55 PM
						</div>
					</div>
					<div className="chat-visitor-message clearfix">
						<div className="chat-visitor-name">
							Visitor
						</div>
						<div className="chat-visitor-content">
							I have a question about your product.
						</div>
						<div className="chat-visitor-time">
							03:55 PM
						</div>
					</div>
				</div>
				<ChatWindowInput />
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