/*!
 * version: 1.0.0
 * date: 2016-10-09T16:21:51.963Z
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	__webpack_require__(175);
	
	__webpack_require__(174);
	// require('./control/textbox');
	// require('./control/checkbox');
	// require('./prechat');
	
	$(".chatbutton").on("click", function () {
		$(".chatmessage").addClass("show");
	});
	$(".chatbutton-square").on("click", function () {
		$(".chatmessage").addClass("show");
	});
	
	$(".chatmessage .close").on("click", function () {
		$(".chatmessage").removeClass("show");
	});
	
	$("#chatinput").on("keyup", function () {
		var $this = $(this);
		if ($this.val()) {
			if (!$this.parent().hasClass("chatinput-focus")) {
				$this.parent().addClass("chatinput-focus");
			}
		} else {
			$this.parent().removeClass("chatinput-focus");
		}
	});
	
	setTimeout(function () {
		$(".chatbutton").addClass("bounceInUp animated");
		$(".chatbutton-square").addClass("bounceInRight animated");
		$(".chatwindow-container").show(400);
	}, 1000);
	
	setTimeout(function () {
		$(".chatbutton").addClass("shake animated");
	}, 5000);
	
	$(function () {
	
		$(".content-clone").append($(".content").clone());
	
		var winHeight = 0;
		var winWidth = 0;
	
		function initBlur() {
			winHeight = document.documentElement.clientHeight;
			winWidth = document.documentElement.clientWidth;
	
			$(".content-clone").css({
				"width": winWidth,
				"transform": "translate3d(" + -(winWidth - 30 - 400) + "px, " + (-$(window).scrollTop() - (winHeight - 30 - 70)) + "px, 0px)"
			});
		}
		initBlur();
		$(window).resize(function () {
			initBlur();
		});
		$(document).scroll(function () {
			$(".content-clone").css("transform", "translate3d(" + -(winWidth - 30 - 400) + "px, " + (-$(this).scrollTop() - (winHeight - 30 - 70)) + "px, 0px)");
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(174)))

/***/ },

/***/ 175:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=index.js.map