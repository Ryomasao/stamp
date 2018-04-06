/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

var stapms = new Vue({
    el: '.show-stamp',
    data: {
        company_id: '',
        header_template: '',
        header_style: '.preview-header {\n            background:gray;\n        }\n        ',
        stamp_style: 'background:skyblue',
        jan_code_1: '',
        jan_code_2: '',
        jan_code_3: '',
        updated: ''
    },
    methods: {},
    components: {
        preview: {
            props: ['template'],
            render: function render(createElement) {
                return createElement('div', {
                    domProps: {
                        innerHTML: this.template
                    }
                });
            }
        }
    },
    mounted: function mounted() {
        var style = '<style>';
        style += this.header_style;
        style += '</style>';
        this.updated = this.header_template + style;
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDgxMzVhNTZiYjRhMmNjNmExYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ndWVzdC9zdGFtcHMuanMiXSwibmFtZXMiOlsic3RhcG1zIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29tcGFueV9pZCIsImhlYWRlcl90ZW1wbGF0ZSIsImhlYWRlcl9zdHlsZSIsInN0YW1wX3N0eWxlIiwiamFuX2NvZGVfMSIsImphbl9jb2RlXzIiLCJqYW5fY29kZV8zIiwidXBkYXRlZCIsIm1ldGhvZHMiLCJjb21wb25lbnRzIiwicHJldmlldyIsInByb3BzIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvbVByb3BzIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJtb3VudGVkIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxJQUFNQSxTQUFTLElBQUlDLEdBQUosQ0FBUTtBQUNuQkMsUUFBSSxhQURlO0FBRW5CQyxVQUFLO0FBQ0RDLG9CQUFXLEVBRFY7QUFFREMseUJBQWdCLEVBRmY7QUFHREMsNEZBSEM7QUFPREMseUNBUEM7QUFRREMsb0JBQVksRUFSWDtBQVNEQyxvQkFBWSxFQVRYO0FBVURDLG9CQUFZLEVBVlg7QUFXREMsaUJBQVE7QUFYUCxLQUZjO0FBZW5CQyxhQUFRLEVBZlc7QUFpQm5CQyxnQkFBVztBQUNQQyxpQkFBUTtBQUNKQyxtQkFBTSxDQUFDLFVBQUQsQ0FERjtBQUVKQyxrQkFGSSxrQkFFR0MsYUFGSCxFQUVpQjtBQUNqQix1QkFBT0EsY0FBYyxLQUFkLEVBQXFCO0FBQ3hCQyw4QkFBUztBQUNMQyxtQ0FBVSxLQUFLQztBQURWO0FBRGUsaUJBQXJCLENBQVA7QUFLSDtBQVJHO0FBREQsS0FqQlE7QUE2Qm5CQyxhQUFRLG1CQUFVO0FBQ2IsWUFBSUMsUUFBUSxTQUFaO0FBQ0FBLGlCQUFTLEtBQUtoQixZQUFkO0FBQ0FnQixpQkFBUyxVQUFUO0FBQ0EsYUFBS1gsT0FBTCxHQUFlLEtBQUtOLGVBQUwsR0FBdUJpQixLQUF0QztBQUNKO0FBbENrQixDQUFSLENBQWYsQyIsImZpbGUiOiIvanMvZ3Vlc3Qvc3RhbXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gODYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ4MTM1YTU2YmI0YTJjYzZhMWI5IiwiY29uc3Qgc3RhcG1zID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogJy5zaG93LXN0YW1wJyxcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIGNvbXBhbnlfaWQ6JycsXHJcbiAgICAgICAgaGVhZGVyX3RlbXBsYXRlOicnLFxyXG4gICAgICAgIGhlYWRlcl9zdHlsZTpgLnByZXZpZXctaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIHN0YW1wX3N0eWxlOmBiYWNrZ3JvdW5kOnNreWJsdWVgLFxyXG4gICAgICAgIGphbl9jb2RlXzE6ICcnLFxyXG4gICAgICAgIGphbl9jb2RlXzI6ICcnLFxyXG4gICAgICAgIGphbl9jb2RlXzM6ICcnLFxyXG4gICAgICAgIHVwZGF0ZWQ6JycsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgcHJldmlldzp7XHJcbiAgICAgICAgICAgIHByb3BzOlsndGVtcGxhdGUnXSxcclxuICAgICAgICAgICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDp0aGlzLnRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgbGV0IHN0eWxlID0gJzxzdHlsZT4nXHJcbiAgICAgICAgIHN0eWxlICs9IHRoaXMuaGVhZGVyX3N0eWxlO1xyXG4gICAgICAgICBzdHlsZSArPSAnPC9zdHlsZT4nXHJcbiAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRoaXMuaGVhZGVyX3RlbXBsYXRlICsgc3R5bGU7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2d1ZXN0L3N0YW1wcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=