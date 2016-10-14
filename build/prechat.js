/*!
 * version: 1.0.0
 * date: 2016-10-09T16:21:51.963Z
 */
webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _textbox = __webpack_require__(196);
	
	var _textbox2 = _interopRequireDefault(_textbox);
	
	var _checkboxgroup = __webpack_require__(197);
	
	var _checkboxgroup2 = _interopRequireDefault(_checkboxgroup);
	
	var _radioboxgroup = __webpack_require__(198);
	
	var _radioboxgroup2 = _interopRequireDefault(_radioboxgroup);
	
	var _dropdownlist = __webpack_require__(199);
	
	var _dropdownlist2 = _interopRequireDefault(_dropdownlist);
	
	var _rate = __webpack_require__(200);
	
	var _rate2 = _interopRequireDefault(_rate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import CheckBox from './control/checkbox';
	
	
	var PreChat = function (_React$Component) {
		_inherits(PreChat, _React$Component);
	
		function PreChat() {
			_classCallCheck(this, PreChat);
	
			var _this = _possibleConstructorReturn(this, (PreChat.__proto__ || Object.getPrototypeOf(PreChat)).call(this));
	
			_this.state = {
				name: "mark",
				department: "lolly",
				productservice: "1,0",
				heardus: "1",
				rate: 0
			};
			return _this;
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
	
	
		_createClass(PreChat, [{
			key: 'controlTextBoxChange',
			value: function controlTextBoxChange(newName) {
				this.setState({
					name: newName
				});
			}
		}, {
			key: 'controlCheckboxChange',
			value: function controlCheckboxChange(newProductservice) {
				this.setState({
					productservice: newProductservice
				});
			}
		}, {
			key: 'controlRadioBoxChange',
			value: function controlRadioBoxChange(newHeardus) {
				this.setState({
					heardus: newHeardus
				});
			}
		}, {
			key: 'controlDropdownChange',
			value: function controlDropdownChange(newDepartment) {
				this.setState({
					department: newDepartment
				});
			}
		}, {
			key: 'controlRateChange',
			value: function controlRateChange(newRate) {
				this.setState({
					rate: newRate
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'prechat-container' },
					_react2.default.createElement(
						'div',
						{ className: 'header' },
						_react2.default.createElement(
							'div',
							{ className: 'header-btn-container' },
							_react2.default.createElement('i', { className: 'icon-resources icon-resources-minimize' }),
							_react2.default.createElement('i', { className: 'icon-resources icon-resources-close' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'prechat-content' },
						_react2.default.createElement(
							'div',
							{ className: 'chat-system-message' },
							'We are excited to chat with you! Please fill out the form below so that we can serve you better.'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'formContainer' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'title' },
									'Name:'
								),
								_react2.default.createElement(_textbox2.default, { required: 'required', placeholder: 'Name', value: this.state.name, controlTextBoxChange: this.controlTextBoxChange.bind(this) })
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'title' },
									'Department:'
								),
								_react2.default.createElement(_dropdownlist2.default, { dropdownOption: [{ value: 'mark', text: 'Mark' }, { value: 'molly', text: 'Molly' }, { value: 'lolly', text: 'Lolly' }],
									defaultVal: this.state.department,
									controlDropdownChange: this.controlDropdownChange.bind(this)
								})
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'title' },
									'Product Service:'
								),
								_react2.default.createElement(_checkboxgroup2.default, { checkboxOption: [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }],
	
									defaultVal: this.state.productservice,
									controlCheckboxChange: this.controlCheckboxChange.bind(this) })
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'title' },
									'Have you ever heard of us?'
								),
								_react2.default.createElement(_radioboxgroup2.default, { radioOption: [{ text: 'Yes', value: '1', name: 'radio-name' }, { text: 'No', value: '0', name: 'radio-name' }],
									defaultVal: this.state.heardus,
									controlRadioBoxChange: this.controlRadioBoxChange.bind(this) })
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(_rate2.default, { rateVal: this.state.rate,
									starLength: 5,
									ifCanHalfClick: false,
									controlRateChange: this.controlRateChange.bind(this) })
							)
						),
						_react2.default.createElement(
							'label',
							null,
							this.state.name
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							this.state.department
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							this.state.productservice
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							this.state.heardus
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							this.state.rate
						),
						_react2.default.createElement('br', null)
					),
					_react2.default.createElement('div', { className: 'footer' })
				);
			}
		}]);
	
		return PreChat;
	}(_react2.default.Component);
	
	;
	
	_reactDom2.default.render(_react2.default.createElement(PreChat, null), document.getElementById('prechat'));
	
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

/***/ },

/***/ 196:
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
	
	var ControlTextBox = function (_React$Component) {
		_inherits(ControlTextBox, _React$Component);
	
		function ControlTextBox(props) {
			_classCallCheck(this, ControlTextBox);
	
			var _this = _possibleConstructorReturn(this, (ControlTextBox.__proto__ || Object.getPrototypeOf(ControlTextBox)).call(this, props));
	
			_this.state = {
				// value: props.value,
				className: "control-input"
			};
			return _this;
		}
	
		_createClass(ControlTextBox, [{
			key: 'handleChange',
			value: function handleChange(event) {
				this.setState({
					// value: event.target.value,
					className: this.props.required ? event.target.value ? "control-input" : "control-input error" : ""
				});
	
				this.props.controlTextBoxChange(event.target.value);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement('input', { type: 'text',
					disabled: this.props.disabled,
					placeholder: this.props.placeholder,
					defaultValue: this.props.value,
					className: this.state.className,
					onChange: this.handleChange.bind(this) });
			}
		}]);
	
		return ControlTextBox;
	}(_react2.default.Component);
	
	// ReactDom.render(
	// 	<ControlTextBox required="required"/>,
	// 	document.body
	// )
	
	exports.default = ControlTextBox;

/***/ },

/***/ 197:
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
	
	var ControlCheckboxGroup = function (_React$Component) {
	    _inherits(ControlCheckboxGroup, _React$Component);
	
	    function ControlCheckboxGroup(props) {
	        _classCallCheck(this, ControlCheckboxGroup);
	
	        return _possibleConstructorReturn(this, (ControlCheckboxGroup.__proto__ || Object.getPrototypeOf(ControlCheckboxGroup)).call(this, props));
	        // this.state={
	        //     checkboxOption: props.checkboxOption
	        // }
	    }
	
	    _createClass(ControlCheckboxGroup, [{
	        key: 'handleChangeCheckBox',
	        value: function handleChangeCheckBox(index) {
	            //let _checkboxOption = this.props.checkboxOption;
	
	            // if(_checkboxOption[index].checked){
	            //     _checkboxOption[index].checked = false;
	            // }else{
	            //     _checkboxOption[index].checked = true;
	            // }
	
	            // // this.setState({checkboxOption: _checkboxOption});
	
	            var checkedVal = "";
	            // _checkboxOption.map((item, index) => {
	            //     if(item.checked){
	            //         checkedVal+=item.value+","
	            //     }
	            // });
	            for (var i in this.refs) {
	                if (this.refs[i].checked) {
	                    checkedVal += this.refs[i].value + ",";
	                }
	            }
	            // if(this.refs["inputcheckbox"+index].checked){
	            //     checkedVal+=this.refs["inputcheckbox"+index].value+","
	            // }
	            this.props.controlCheckboxChange(checkedVal);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.checkboxOption.map(function (item, index) {
	                    return _react2.default.createElement(
	                        'label',
	                        { key: index, className: _this2.props.block ? "control-container control-checkbox control-checkbox-block" : "control-container control-checkbox" },
	                        item.text,
	                        _react2.default.createElement('input', { type: 'checkbox',
	                            ref: "inputcheckbox" + index,
	                            disabled: _this2.props.disabled,
	                            value: item.value,
	                            onChange: _this2.handleChangeCheckBox.bind(_this2, index),
	                            checked: _this2.props.defaultVal.indexOf(item.value) !== -1 }),
	                        _react2.default.createElement('div', { className: 'control-indicator' })
	                    );
	                })
	            );
	        }
	    }]);
	
	    return ControlCheckboxGroup;
	}(_react2.default.Component);
	
	// ReactDom.render(
	// 	<ControlCheckbox text="Yes"/>,
	// 	document.getElementById('checkboxContainer')
	// );
	
	
	exports.default = ControlCheckboxGroup;

/***/ },

/***/ 198:
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
	
	var ControlRadioBoxGroup = function (_React$Component) {
		_inherits(ControlRadioBoxGroup, _React$Component);
	
		function ControlRadioBoxGroup(props) {
			_classCallCheck(this, ControlRadioBoxGroup);
	
			return _possibleConstructorReturn(this, (ControlRadioBoxGroup.__proto__ || Object.getPrototypeOf(ControlRadioBoxGroup)).call(this, props));
			// this.state = {
			// 	radioOption:props.radioOption
			// }
		}
	
		_createClass(ControlRadioBoxGroup, [{
			key: 'handleClick',
			value: function handleClick(index) {
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
				this.props.controlRadioBoxChange(this.refs["radio" + index].value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return _react2.default.createElement(
					'div',
					null,
					this.props.radioOption.map(function (item, index) {
						return _react2.default.createElement(
							'label',
							{ key: index, className: _this2.props.block ? "control-container control-radio control-radio-block" : "control-container control-radio" },
							item.text,
							_react2.default.createElement('input', { type: 'radio',
								ref: "radio" + index,
								name: item.name,
								onChange: _this2.handleClick.bind(_this2, index),
								disabled: _this2.props.disabled,
								value: item.value,
								defaultChecked: _this2.props.defaultVal.indexOf(item.value) !== -1 }),
							_react2.default.createElement('div', { className: 'control-indicator' })
						);
					})
				);
			}
		}]);
	
		return ControlRadioBoxGroup;
	}(_react2.default.Component);
	
	exports.default = ControlRadioBoxGroup;

/***/ },

/***/ 199:
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
	
	var dropdownlist = function (_React$Component) {
		_inherits(dropdownlist, _React$Component);
	
		function dropdownlist(props) {
			_classCallCheck(this, dropdownlist);
	
			return _possibleConstructorReturn(this, (dropdownlist.__proto__ || Object.getPrototypeOf(dropdownlist)).call(this, props));
		}
	
		_createClass(dropdownlist, [{
			key: 'handleDropdownChange',
			value: function handleDropdownChange(event) {
				this.props.controlDropdownChange(event.target.value);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'select' },
					_react2.default.createElement(
						'select',
						{ value: this.props.defaultVal, onChange: this.handleDropdownChange.bind(this) },
						this.props.dropdownOption.map(function (item, index) {
							return _react2.default.createElement(
								'option',
								{ key: index, value: item.value },
								item.text
							);
						})
					),
					_react2.default.createElement('div', { className: 'select-arrow' })
				);
			}
		}]);
	
		return dropdownlist;
	}(_react2.default.Component);
	
	exports.default = dropdownlist;

/***/ },

/***/ 200:
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
	
	var Rate = function (_React$Component) {
		_inherits(Rate, _React$Component);
	
		// static defaultProps = {
		//     starLength: 5
		// }
		// static propTypes = {
		// 	starLength: React.PropTypes.number
		// }
		function Rate(props) {
			_classCallCheck(this, Rate);
	
			var _this2 = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));
	
			_this2.state = {
				starClicked: false,
				starParentClicked: false,
				rateVal: props.rateVal
			};
			return _this2;
		}
	
		_createClass(Rate, [{
			key: 'hoverChange',
			value: function hoverChange(rateVal) {
				if (!this.state.starClicked) {
					this.setState({
						rateVal: rateVal
					});
				}
			}
		}, {
			key: 'clickChange',
			value: function clickChange(rateVal) {
				this.setState({
					starClicked: true,
					rateVal: rateVal
				});
	
				this.props.controlRateChange(rateVal);
			}
		}, {
			key: 'starClickChange',
			value: function starClickChange() {
				var _this = this;
				_this.setState({
					starParentClicked: true
				});
	
				setTimeout(function () {
					_this.setState({
						starParentClicked: false
					});
				}, 1000);
			}
		}, {
			key: 'render',
			value: function render() {
	
				var nodeChild = [];
				for (var i = 1; i <= this.props.starLength; i++) {
					if (this.props.ifCanHalfClick) {
						nodeChild.push(_react2.default.createElement(
							'div',
							{ key: i,
								className: this.state.rateVal >= i ? "star animate" : "star",
								onClick: this.starClickChange.bind(this) },
							_react2.default.createElement('span', { className: this.state.rateVal >= i ? "full star-colour" : "full",
								'data-value': i,
								onMouseOver: this.hoverChange.bind(this, i),
								onClick: this.clickChange.bind(this, i) }),
							_react2.default.createElement('span', { className: this.state.rateVal >= i - 0.5 ? "half star-colour" : "half",
								'data-value': i - 0.5,
								onMouseOver: this.hoverChange.bind(this, i - 0.5),
								onMouseOut: i == 1 ? this.hoverChange.bind(this, "0") : "",
								onClick: this.clickChange.bind(this, i - 0.5) }),
							_react2.default.createElement('span', { className: this.state.starParentClicked && this.state.rateVal > i - 1 && this.state.rateVal <= i ? "selected is-animated pulse" : "selected" })
						));
					} else {
						nodeChild.push(_react2.default.createElement(
							'div',
							{ key: i,
								className: this.state.rateVal >= i ? "star animate" : "star",
								onClick: this.starClickChange.bind(this) },
							_react2.default.createElement('span', { className: this.state.rateVal >= i ? "full star-colour" : "full",
								'data-value': i,
								onMouseOver: this.hoverChange.bind(this, i),
								onMouseOut: i == 1 ? this.hoverChange.bind(this, "0") : "",
								onClick: this.clickChange.bind(this, i) }),
							_react2.default.createElement('span', { className: this.state.starParentClicked && this.state.rateVal > i - 1 && this.state.rateVal <= i ? "selected is-animated pulse" : "selected" })
						));
					}
				}
	
				return _react2.default.createElement(
					'div',
					{ className: 'rating', 'data-vote': '0' },
					nodeChild
				);
			}
		}]);
	
		return Rate;
	}(_react2.default.Component);
	
	Rate.defaultProps = {
		starLength: 5
	};
	Rate.propTypes = {
		// starLength: React.PropTypes.number
		starLength: _react2.default.PropTypes.number.isRequired
	};
	exports.default = Rate;

/***/ }

});
//# sourceMappingURL=prechat.js.map