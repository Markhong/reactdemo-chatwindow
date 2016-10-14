/*!
 * version: 1.0.0
 * date: 2016-10-09T16:21:51.963Z
 */
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _MessageContent = __webpack_require__(172);
	
	var _MessageContent2 = _interopRequireDefault(_MessageContent);
	
	var _chatwindowInput = __webpack_require__(173);
	
	var _chatwindowInput2 = _interopRequireDefault(_chatwindowInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChatWindow = function (_React$Component) {
		_inherits(ChatWindow, _React$Component);
	
		function ChatWindow() {
			_classCallCheck(this, ChatWindow);
	
			var _this = _possibleConstructorReturn(this, (ChatWindow.__proto__ || Object.getPrototypeOf(ChatWindow)).call(this));
	
			_this.state = {
				message: [{
					type: "0", //operator
					name: "Mark",
					content: "Hello, how may I help you?",
					time: new Date().getHours() + ":" + new Date().getMinutes()
				}, {
					type: "1", //visitor
					name: "Visitor",
					content: "I have a question about your product.",
					time: new Date().getHours() + ":" + new Date().getMinutes()
				}]
			};
			return _this;
		}
	
		_createClass(ChatWindow, [{
			key: 'sendHandle',
			value: function sendHandle(newMessage) {
				var newMins = 0;
				var newTime = newMessage[0].time.split(":");
				newMins = newTime[1];
	
				var latestMins = 0;
				var latestTime = this.state.message[this.state.message.length - 1].time.split(":");
				latestMins = latestTime[1];
	
				var newArrayMessage = void 0;
				if (newMins - latestMins == 0) {
					this.state.message[this.state.message.length - 1].content += "\n" + newMessage[0].content;
					this.setState({
						message: this.state.message
					});
				} else {
					newArrayMessage = this.state.message.concat(newMessage);
					this.setState({
						message: newArrayMessage
					});
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'chatwindow-container' },
					_react2.default.createElement(
						'div',
						{ className: 'header clearfix' },
						_react2.default.createElement('img', { src: '../../build/css/avatar.jpg', className: 'avatar', alt: '', width: '50', height: '50' }),
						_react2.default.createElement(
							'div',
							{ className: 'operatorinfo' },
							_react2.default.createElement(
								'div',
								{ className: 'name' },
								'Mark'
							),
							_react2.default.createElement(
								'div',
								{ className: 'title' },
								'Sales'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'header-btn-container' },
							_react2.default.createElement('i', { className: 'icon-resources icon-resources-minimize' }),
							_react2.default.createElement('i', { className: 'icon-resources icon-resources-close' })
						)
					),
					_react2.default.createElement(_MessageContent2.default, { propsMessage: this.state.message }),
					_react2.default.createElement(_chatwindowInput2.default, { className: 'sspp', name: 'mark2016', value: '', sendChange: this.sendHandle.bind(this) }),
					_react2.default.createElement(
						'div',
						{ className: 'footer' },
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-email' }),
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-sendfile' }),
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-rate' }),
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-voice' }),
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-rename' }),
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-print' })
					)
				);
			}
		}]);
	
		return ChatWindow;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(ChatWindow, null), document.getElementById('chatwindow'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MessageContent = function (_React$Component) {
		_inherits(MessageContent, _React$Component);
	
		function MessageContent() {
			_classCallCheck(this, MessageContent);
	
			return _possibleConstructorReturn(this, (MessageContent.__proto__ || Object.getPrototypeOf(MessageContent)).call(this));
		}
	
		_createClass(MessageContent, [{
			key: 'scrollToBottom',
			value: function scrollToBottom() {}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				// this.refs.messagecontainer.scrollTop = this.refs.messagecontainer.scrollHeight;
				// alert(this.refs.messagecontainer.scrollHeight);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				var messagecontainer = this.refs.messagecontainer;
				messagecontainer.scrollTop = messagecontainer.scrollHeight;
			}
		}, {
			key: 'render',
			value: function render() {
				var messageContent = [];
				this.props.propsMessage.map(function (item, index) {
					if (item.type === "0") {
						messageContent.push(_react2.default.createElement(
							'div',
							{ key: index, className: 'chat-operator-message clearfix' },
							_react2.default.createElement(
								'div',
								{ className: 'chat-operator-name' },
								item.name
							),
							_react2.default.createElement(
								'div',
								{ className: 'chat-operator-content' },
								item.content
							),
							_react2.default.createElement(
								'div',
								{ className: 'chat-operator-time' },
								item.time
							)
						));
					} else {
						messageContent.push(_react2.default.createElement(
							'div',
							{ key: index, className: 'chat-visitor-message clearfix' },
							_react2.default.createElement(
								'div',
								{ className: 'chat-visitor-name' },
								item.name
							),
							_react2.default.createElement(
								'div',
								{ className: 'chat-visitor-content' },
								item.content.split('\n').map(function (line, index) {
									return _react2.default.createElement(
										'div',
										{ key: index },
										line
									);
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'chat-visitor-time' },
								item.time
							)
						));
					}
				});
				return _react2.default.createElement(
					'div',
					{ className: 'messagecontainer', ref: 'messagecontainer' },
					_react2.default.createElement(
						'div',
						{ className: 'chat-system-message' },
						'Operator Mark has joined the chat.'
					),
					messageContent
				);
			}
		}]);
	
		return MessageContent;
	}(_react2.default.Component);
	
	exports.default = MessageContent;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChatWindowInput = function (_React$Component) {
		_inherits(ChatWindowInput, _React$Component);
	
		function ChatWindowInput(props) {
			_classCallCheck(this, ChatWindowInput);
	
			var _this = _possibleConstructorReturn(this, (ChatWindowInput.__proto__ || Object.getPrototypeOf(ChatWindowInput)).call(this, props));
	
			_this.state = {
				textareaValue: props.value
			};
			return _this;
		}
	
		_createClass(ChatWindowInput, [{
			key: 'handleChange',
			value: function handleChange(event) {
				this.setState({
					textareaValue: event.target.value
				});
			}
		}, {
			key: 'sendMessage',
			value: function sendMessage() {
				if (this.refs.chatinput.value) {
					var newMessage = [{
						type: "1",
						name: "Visitor",
						content: this.refs.chatinput.value,
						time: new Date().getHours() + ":" + new Date().getMinutes()
					}];
					this.props.sendChange(newMessage);
	
					this.setState({
						textareaValue: ""
					});
					this.refs.chatinput.focus();
				}
			}
		}, {
			key: 'keyDownSendMessage',
			value: function keyDownSendMessage(e) {
				var eve = e || window.event;
				if (eve.keyCode == 13) {
					eve.preventDefault();
					this.sendMessage();
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				// this.props.scrollToBottom();
			}
		}, {
			key: 'render',
			value: function render() {
	
				return _react2.default.createElement(
					'div',
					{ className: this.state.textareaValue ? "messageinput chatinput-focus" : "messageinput" },
					_react2.default.createElement('textarea', { id: 'chatinput',
						ref: 'chatinput',
						value: this.state.textareaValue,
						onChange: this.handleChange.bind(this),
						onKeyDown: this.keyDownSendMessage.bind(this) }),
					_react2.default.createElement(
						'div',
						{ className: 'messagesend', onClick: this.sendMessage.bind(this) },
						_react2.default.createElement('i', { className: 'icon-resources icon-resources-send' })
					)
				);
			}
		}]);
	
		return ChatWindowInput;
	}(_react2.default.Component);
	
	exports.default = ChatWindowInput;

/***/ }

});
//# sourceMappingURL=chatwindow.js.map