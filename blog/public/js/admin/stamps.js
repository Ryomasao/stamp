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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {


var stapms = new Vue({
    el: '.stamp-create-two-column',
    data: {
        company_id: '',
        header_template: '<p>ヘッダー領域</p>',
        header_style: '.preview-header {\n            background:#A5DEE5;\n            color:white;\n        }\n        ',
        stamp_style: 'background:#75CCE8',
        jan_code_1: '',
        jan_code_2: '',
        jan_code_3: '',
        quantity: 9,
        updated: ''
    },
    computed: {
        headerStyle: function headerStyle() {

            var style = '<style>';
            style += this.header_style;
            style += '</style>';
            return style;
        },
        stampStyle: function stampStyle() {
            var style = '<style>';
            style += this.stamp_style;
            style += '</style>';
            return style;
        }
    },
    watch: {
        header_template: function header_template() {
            this.updated = this.header_template + this.headerStyle;
        },
        header_style: function header_style() {
            this.updated = this.header_template + this.headerStyle;
        }
    },
    methods: {
        //Formのsubmitイベントが発生したとき
        onSubmit: function onSubmit() {
            //$dataは上記のdataのことだよ！  
            axios.post('/admin/stamps', this.$data)
            //HTTPリクエストが成功したとき
            .then(function (response) {
                location.href = '/admin/stamps';
            })
            //HTTPリクエエストが失敗した時
            .catch(function (error) {
                return console.log(error.response);
            });
        },
        update: function update() {
            this.updated = this.header_template + this.headerStyle;
            //this.$refs.child,$forceUpdate();
        }
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDgxMzVhNTZiYjRhMmNjNmExYjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hZG1pbi9zdGFtcHMuanMiXSwibmFtZXMiOlsic3RhcG1zIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29tcGFueV9pZCIsImhlYWRlcl90ZW1wbGF0ZSIsImhlYWRlcl9zdHlsZSIsInN0YW1wX3N0eWxlIiwiamFuX2NvZGVfMSIsImphbl9jb2RlXzIiLCJqYW5fY29kZV8zIiwicXVhbnRpdHkiLCJ1cGRhdGVkIiwiY29tcHV0ZWQiLCJoZWFkZXJTdHlsZSIsInN0eWxlIiwic3RhbXBTdHlsZSIsIndhdGNoIiwibWV0aG9kcyIsIm9uU3VibWl0IiwiYXhpb3MiLCJwb3N0IiwiJGRhdGEiLCJ0aGVuIiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsInVwZGF0ZSIsImNvbXBvbmVudHMiLCJwcmV2aWV3IiwicHJvcHMiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZG9tUHJvcHMiLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZSIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REEsSUFBTUEsU0FBUyxJQUFJQyxHQUFKLENBQVE7QUFDbkJDLFFBQUksMEJBRGU7QUFFbkJDLFVBQUs7QUFDREMsb0JBQVcsRUFEVjtBQUVEQyx5QkFBZ0IsZUFGZjtBQUdEQyx5SEFIQztBQVFEQyx5Q0FSQztBQVNEQyxvQkFBWSxFQVRYO0FBVURDLG9CQUFZLEVBVlg7QUFXREMsb0JBQVksRUFYWDtBQVlEQyxrQkFBUyxDQVpSO0FBYURDLGlCQUFRO0FBYlAsS0FGYztBQWlCbkJDLGNBQVM7QUFDTEMscUJBQVksdUJBQVU7O0FBRWxCLGdCQUFJQyxRQUFRLFNBQVo7QUFDQUEscUJBQVMsS0FBS1QsWUFBZDtBQUNBUyxxQkFBUyxVQUFUO0FBQ0EsbUJBQVFBLEtBQVI7QUFDSCxTQVBJO0FBUUxDLG9CQUFXLHNCQUFVO0FBQ2pCLGdCQUFJRCxRQUFRLFNBQVo7QUFDQUEscUJBQVMsS0FBS1IsV0FBZDtBQUNBUSxxQkFBUyxVQUFUO0FBQ0EsbUJBQVFBLEtBQVI7QUFDSDtBQWJJLEtBakJVO0FBZ0NuQkUsV0FBTTtBQUNGWix5QkFBZ0IsMkJBQVU7QUFDckIsaUJBQUtPLE9BQUwsR0FBZSxLQUFLUCxlQUFMLEdBQXVCLEtBQUtTLFdBQTNDO0FBQ0osU0FIQztBQUlGUixzQkFBYSx3QkFBVTtBQUNsQixpQkFBS00sT0FBTCxHQUFlLEtBQUtQLGVBQUwsR0FBdUIsS0FBS1MsV0FBM0M7QUFDSjtBQU5DLEtBaENhO0FBd0NuQkksYUFBUTtBQUNIO0FBQ0FDLGtCQUFTLG9CQUFVO0FBQ2Y7QUFDQUMsa0JBQU1DLElBQU4sQ0FBVyxlQUFYLEVBQTRCLEtBQUtDLEtBQWpDO0FBQ0E7QUFEQSxhQUVDQyxJQUZELENBRU0sb0JBQVk7QUFDZEMseUJBQVNDLElBQVQsR0FBZ0IsZUFBaEI7QUFDSCxhQUpEO0FBS0E7QUFMQSxhQU1DQyxLQU5ELENBTU87QUFBQSx1QkFBU0MsUUFBUUMsR0FBUixDQUFZQyxNQUFNQyxRQUFsQixDQUFUO0FBQUEsYUFOUDtBQU9ILFNBWEU7QUFZSEMsZ0JBQU8sa0JBQVU7QUFDYixpQkFBS25CLE9BQUwsR0FBZSxLQUFLUCxlQUFMLEdBQXVCLEtBQUtTLFdBQTNDO0FBQ0E7QUFDSDtBQWZFLEtBeENXO0FBeURuQmtCLGdCQUFXO0FBQ1BDLGlCQUFRO0FBQ0pDLG1CQUFNLENBQUMsVUFBRCxDQURGO0FBRUpDLGtCQUZJLGtCQUVHQyxhQUZILEVBRWlCO0FBQ2pCLHVCQUFPQSxjQUFjLEtBQWQsRUFBcUI7QUFDeEJDLDhCQUFTO0FBQ0xDLG1DQUFVLEtBQUtDO0FBRFY7QUFEZSxpQkFBckIsQ0FBUDtBQUtIO0FBUkc7QUFERCxLQXpEUTtBQXFFbkJDLGFBQVEsbUJBQVU7QUFDYixZQUFJekIsUUFBUSxTQUFaO0FBQ0FBLGlCQUFTLEtBQUtULFlBQWQ7QUFDQVMsaUJBQVMsVUFBVDtBQUNBLGFBQUtILE9BQUwsR0FBZSxLQUFLUCxlQUFMLEdBQXVCVSxLQUF0QztBQUNKO0FBMUVrQixDQUFSLENBQWYsQyIsImZpbGUiOiIvanMvYWRtaW4vc3RhbXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ4MTM1YTU2YmI0YTJjYzZhMWI5IiwiXG5jb25zdCBzdGFwbXMgPSBuZXcgVnVlKHtcbiAgICBlbDogJy5zdGFtcC1jcmVhdGUtdHdvLWNvbHVtbicsXG4gICAgZGF0YTp7XG4gICAgICAgIGNvbXBhbnlfaWQ6JycsXG4gICAgICAgIGhlYWRlcl90ZW1wbGF0ZTonPHA+44OY44OD44OA44O86aCY5Z+fPC9wPicsXG4gICAgICAgIGhlYWRlcl9zdHlsZTpgLnByZXZpZXctaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0E1REVFNTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIHN0YW1wX3N0eWxlOmBiYWNrZ3JvdW5kOiM3NUNDRThgLFxuICAgICAgICBqYW5fY29kZV8xOiAnJyxcbiAgICAgICAgamFuX2NvZGVfMjogJycsXG4gICAgICAgIGphbl9jb2RlXzM6ICcnLFxuICAgICAgICBxdWFudGl0eTo5LFxuICAgICAgICB1cGRhdGVkOicnXG4gICAgfSxcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIGhlYWRlclN0eWxlOmZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGxldCBzdHlsZSA9ICc8c3R5bGU+J1xuICAgICAgICAgICAgc3R5bGUgKz0gdGhpcy5oZWFkZXJfc3R5bGU7XG4gICAgICAgICAgICBzdHlsZSArPSAnPC9zdHlsZT4nXG4gICAgICAgICAgICByZXR1cm4gIHN0eWxlO1xuICAgICAgICB9LFxuICAgICAgICBzdGFtcFN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSAnPHN0eWxlPidcbiAgICAgICAgICAgIHN0eWxlICs9IHRoaXMuc3RhbXBfc3R5bGU7XG4gICAgICAgICAgICBzdHlsZSArPSAnPC9zdHlsZT4nXG4gICAgICAgICAgICByZXR1cm4gIHN0eWxlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDp7XG4gICAgICAgIGhlYWRlcl90ZW1wbGF0ZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRoaXMuaGVhZGVyX3RlbXBsYXRlICsgdGhpcy5oZWFkZXJTdHlsZTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyX3N0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgdGhpcy51cGRhdGVkID0gdGhpcy5oZWFkZXJfdGVtcGxhdGUgKyB0aGlzLmhlYWRlclN0eWxlO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgICAvL0Zvcm3jga5zdWJtaXTjgqTjg5njg7Pjg4jjgYznmbrnlJ/jgZfjgZ/jgajjgY1cbiAgICAgICAgIG9uU3VibWl0OmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgLy8kZGF0YeOBr+S4iuiomOOBrmRhdGHjga7jgZPjgajjgaDjgojvvIEgIFxuICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hZG1pbi9zdGFtcHMnLCB0aGlzLiRkYXRhKVxuICAgICAgICAgICAgIC8vSFRUUOODquOCr+OCqOOCueODiOOBjOaIkOWKn+OBl+OBn+OBqOOBjVxuICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vc3RhbXBzJztcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC8vSFRUUOODquOCr+OCqOOCqOOCueODiOOBjOWkseaVl+OBl+OBn+aZglxuICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkpO1xuICAgICAgICAgfSxcbiAgICAgICAgIHVwZGF0ZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRoaXMuaGVhZGVyX3RlbXBsYXRlICsgdGhpcy5oZWFkZXJTdHlsZTtcbiAgICAgICAgICAgICAvL3RoaXMuJHJlZnMuY2hpbGQsJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOntcbiAgICAgICAgcHJldmlldzp7XG4gICAgICAgICAgICBwcm9wczpbJ3RlbXBsYXRlJ10sXG4gICAgICAgICAgICByZW5kZXIoY3JlYXRlRWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOnRoaXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDpmdW5jdGlvbigpe1xuICAgICAgICAgbGV0IHN0eWxlID0gJzxzdHlsZT4nXG4gICAgICAgICBzdHlsZSArPSB0aGlzLmhlYWRlcl9zdHlsZTtcbiAgICAgICAgIHN0eWxlICs9ICc8L3N0eWxlPidcbiAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRoaXMuaGVhZGVyX3RlbXBsYXRlICsgc3R5bGU7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FkbWluL3N0YW1wcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=