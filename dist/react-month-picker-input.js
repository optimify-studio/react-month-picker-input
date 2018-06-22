(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-input-mask"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-input-mask", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMonthPickerInput"] = factory(require("react-input-mask"), require("react"));
	else
		root["ReactMonthPickerInput"] = factory(root["react-input-mask"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_index_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var DATE_FORMAT = {
    "default": 'MM/YY',
    "ja": 'YY/MM'
};



;
;
var MonthPickerInput = /** @class */ (function (_super) {
    __extends(MonthPickerInput, _super);
    function MonthPickerInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onCalendarChange = function (year, month) {
            var inputValue = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* valuesToMask */])(month, year, _this.props.lang);
            _this.setState({
                inputValue: inputValue,
                year: year,
                month: month,
                showCalendar: !_this.props.closeOnSelect
            });
            _this.onChange(inputValue, year, month);
        };
        _this.onInputChange = function (e) {
            var mask = e.target.value;
            if (mask.length && mask.indexOf('_') === -1) {
                var _a = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* valuesFromMask */])(mask), month = _a[0], year = _a[1];
                var inputValue = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* valuesToMask */])(month, year, _this.props.lang);
                _this.setState({ year: year, month: month, inputValue: inputValue });
                _this.onChange(inputValue, year, month);
            }
            else
                _this.setState({ inputValue: mask });
        };
        _this.onChange = function (inputValue, year, month) {
            if (_this.props.onChange) {
                _this.props.onChange(inputValue, year, month);
            }
        };
        _this.onInputBlur = function (e) {
            if (!_this.wrapper.contains(e.target)) {
                _this.setState({ showCalendar: false });
            }
        };
        _this.onInputFocus = function (e) {
            if (_this.wrapper.contains(e.target)) {
                _this.setState({ showCalendar: true });
            }
        };
        _this.onCalendarOutsideClick = function (e) {
            _this.setState({ showCalendar: _this.input.input == e.target });
        };
        _this.calendar = function () {
            var _a = _this.state, year = _a.year, month = _a.month;
            var lang = _this.props.lang ? _this.props.lang : 'default';
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* default */], { year: year, month: month, lang: lang, onChange: _this.onCalendarChange, onOutsideClick: _this.onCalendarOutsideClick })));
        };
        _this.inputProps = function () {
            var dateFormat = DATE_FORMAT["default"];
            if (_this.props.lang == "ja") {
                dateFormat = DATE_FORMAT["ja"];
            }
            return Object.assign({}, {
                ref: function (input) { if (input)
                    _this.input = input; },
                mask: "99/99",
                placeholder: dateFormat,
                type: 'text',
                onBlur: _this.onInputBlur,
                onFocus: _this.onInputFocus,
                onChange: _this.onInputChange,
            }, _this.props.inputProps);
        };
        var _a = _this.props, year = _a.year, month = _a.month;
        var inputValue = '';
        if (typeof year == 'number' && typeof month == 'number') {
            inputValue = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* valuesToMask */])(month, year, _this.props.lang);
        }
        _this.state = {
            year: year,
            month: month,
            inputValue: inputValue,
            showCalendar: false,
        };
        return _this;
    }
    ;
    MonthPickerInput.prototype.render = function () {
        var _this = this;
        var _a = this.state, inputValue = _a.inputValue, showCalendar = _a.showCalendar;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { ref: function (wrap) { if (wrap)
                _this.wrapper = wrap; } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_input_mask___default.a, __assign({ value: inputValue }, this.inputProps())),
            showCalendar && this.calendar()));
    };
    ;
    MonthPickerInput.defaultProps = {
        inputProps: {},
        closeOnSelect: false
    };
    return MonthPickerInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
;
/* harmony default export */ __webpack_exports__["default"] = (MonthPickerInput);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MonthCalendar__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__MonthCalendar__["a" /* default */]);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutsideClickWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Head__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var MonthCalendar = /** @class */ (function (_super) {
    __extends(MonthCalendar, _super);
    function MonthCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (selectedYear, selectedMonth) {
            if (typeof selectedYear == 'number' && typeof selectedMonth == 'number') {
                _this.props.onChange(selectedYear, selectedMonth);
            }
        };
        _this.selectYear = function (selectedYear) {
            _this.setState({ selectedYear: selectedYear, currentView: __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* VIEW_MONTHS */] });
            _this.onChange(selectedYear, _this.state.selectedMonth);
        };
        _this.selectMonth = function (selectedMonth) {
            _this.setState({ selectedMonth: selectedMonth });
            _this.onChange(_this.state.selectedYear, selectedMonth);
        };
        _this.previous = function () {
            var startYear = _this.state.years[0] - 12;
            _this.updateYears(startYear);
        };
        _this.next = function () {
            var startYear = _this.state.years[11] + 1;
            _this.updateYears(startYear);
        };
        _this.updateYears = function (startYear) {
            var years = Array.from({ length: 12 }, function (v, k) { return k + startYear; });
            _this.setState({ years: years, currentView: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* VIEW_YEARS */] });
        };
        _this.isYears = function () {
            return _this.state.currentView === __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* VIEW_YEARS */];
        };
        _this.renderMonths = function () {
            var selectedMonth = _this.state.selectedMonth;
            return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* MONTHS_NAMES */][_this.props.lang].map(function (month, index) {
                var selectedKlass = selectedMonth === index ? 'selected_cell' : '';
                return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { key: index, onClick: function () { return _this.selectMonth(index); }, className: "col_mp span_1_of_3_mp " + selectedKlass }, month));
            });
        };
        _this.renderYears = function () {
            var selectedYear = _this.state.selectedYear;
            return _this.state.years.map(function (year, i) {
                var selectedKlass = selectedYear === year ? 'selected_cell' : '';
                return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { key: i, onClick: function () { return _this.selectYear(year); }, className: "col_mp span_1_of_3_mp " + selectedKlass }, year));
            });
        };
        var _a = _this.props, year = _a.year, month = _a.month;
        var startYear = _this.props.startYear || new Date().getFullYear() - 6;
        _this.state = {
            years: Array.from({ length: 12 }, function (v, k) { return k + startYear; }),
            selectedYear: year,
            selectedMonth: month,
            currentView: year ? __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* VIEW_MONTHS */] : __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* VIEW_YEARS */],
        };
        return _this;
    }
    MonthCalendar.prototype.componentWillReceiveProps = function (nextProps) {
        var year = nextProps.year, month = nextProps.month;
        var _a = this.state, selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth;
        if (typeof year == 'number' &&
            typeof month == 'number' &&
            (year !== selectedYear || month !== selectedMonth)) {
            this.setState({
                selectedYear: year,
                selectedMonth: month,
                currentView: __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* VIEW_MONTHS */]
            });
        }
    };
    MonthCalendar.prototype.render = function () {
        var _this = this;
        var _a = this.state, selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__OutsideClickWrapper__["a" /* default */], { onOutsideClick: this.props.onOutsideClick, className: "calendar-container" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Head__["a" /* default */], { year: selectedYear, month: selectedMonth ? selectedMonth + 1 : undefined, lang: this.props.lang, onValueClick: function () { return _this.setState({ currentView: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* VIEW_YEARS */] }); }, onPrev: this.previous, onNext: this.next }),
            this.isYears() ? this.renderYears() : this.renderMonths()));
    };
    return MonthCalendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
;
/* harmony default export */ __webpack_exports__["a"] = (MonthCalendar);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// @flow

;
var OutsideClickWrapper = function (_a) {
    var onOutsideClick = _a.onOutsideClick, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
    var wrapperContainer;
    var handleOutsideClick = function (e) {
        if (wrapperContainer && !wrapperContainer.contains(e.target)) {
            onOutsideClick(e);
        }
    };
    var wrapperMounted = function (container) {
        wrapperContainer = container;
        if (wrapperContainer) {
            window.addEventListener('click', handleOutsideClick, false);
        }
        else {
            window.removeEventListener('click', handleOutsideClick, false);
        }
    };
    return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { ref: wrapperMounted, className: className }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (OutsideClickWrapper);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.selectedValue = function () {
        var _a = this.props, month = _a.month, year = _a.year;
        if (typeof year != 'number') {
            return '';
        }
        else if (typeof month != 'number') {
            return year;
        }
        else {
            var monthVal = month < 10 ? '0' + month : month;
            if (this.props.lang == "ja") {
                return year + '/' + monthVal;
            }
            return monthVal + '/' + year;
        }
    };
    ;
    Head.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "section_mp group_mp" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col_mp span_1_of_3_mp arrows_mp", onClick: this.props.onPrev }, "<"),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col_mp span_1_of_3_mp selected_date_mp", onClick: this.props.onValueClick }, this.selectedValue()),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col_mp span_1_of_3_mp arrows_mp", onClick: this.props.onNext }, ">")));
    };
    return Head;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (Head);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONTHS_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIEW_YEARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VIEW_MONTHS; });
var MONTHS_NAMES = {
    default: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    ja: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ]
};
var VIEW_YEARS = 'YEARS';
var VIEW_MONTHS = 'MONTHS';


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return valuesToMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return valuesFromMask; });
var valuesToMask = function (month, year, lang) {
    var monthNum = month + 1;
    var monthVal = monthNum < 10 ? '0' + monthNum : monthNum;
    var yearVal = year.toString().slice(2);
    if (lang == "ja") {
        return yearVal + '/' + monthVal;
    }
    return monthVal + '/' + yearVal;
};
var valuesFromMask = function (mask) {
    var _a = mask.split('/'), monthVal = _a[0], yearVal = _a[1];
    var rawMonth = parseInt(monthVal);
    var monthNum = rawMonth > 12 ? 12 : (rawMonth == 0 ? 1 : rawMonth);
    var month = monthNum - 1;
    // TODO: make base dynamic
    var year = 2000 + parseInt(yearVal);
    return [month, year];
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});