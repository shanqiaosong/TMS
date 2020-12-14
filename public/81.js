(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/hashids/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/hashids/esm/index.js ***!
  \*******************************************/
/*! exports provided: default, keepUnique, withoutChars, onlyChars */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\WAMP\\www\\TMS\\node_modules\\hashids\\esm\\index.js'");

/***/ }),

/***/ "./resources/js/components/PointsEditForm.js":
/*!***************************************************!*\
  !*** ./resources/js/components/PointsEditForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_admin_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/admin.css */ "./resources/css/admin.css");
/* harmony import */ var _css_admin_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_admin_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper */ "./resources/js/helper.js");
/* harmony import */ var hashids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hashids */ "./node_modules/hashids/esm/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var hashids = new hashids__WEBPACK_IMPORTED_MODULE_7__["default"]('qiaosong', 8);

var PointsEditForm = /*#__PURE__*/function (_React$Component) {
  _inherits(PointsEditForm, _React$Component);

  var _super = _createSuper(PointsEditForm);

  function PointsEditForm(props) {
    var _this;

    _classCallCheck(this, PointsEditForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      teacherId: hashids.decode(_this.props.match.params.teacherId)[0],
      collapses: [],
      data: [],
      submitLoading: false,
      spinning: true,
      infoLoading: true,
      newYear: moment__WEBPACK_IMPORTED_MODULE_4___default()().year(),
      activeKey: [0],
      teacherData: {
        metaData: {}
      },
      configData: {
        prompt: {
          positionPoints: [],
          workloadPoints: [],
          assessmentPoints: [],
          moralityPoints: []
        },
        promptPoints: {
          positionPoints: [],
          workloadPoints: [],
          assessmentPoints: [],
          moralityPoints: []
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "formRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_this), "formRefs", []);

    _defineProperty(_assertThisInitialized(_this), "formRefsPerformance", []);

    _defineProperty(_assertThisInitialized(_this), "formRefsPunishment", []);

    return _this;
  }

  _createClass(PointsEditForm, [{
    key: "handleRefresh",
    value: function handleRefresh() {
      var _this2 = this;

      reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
        url: '/api/1.0/teachers/' + this.state.teacherId,
        type: "json"
      }).then(function (data) {
        _this2.setState({
          teacherData: data,
          infoLoading: false
        });
      }, function (err) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
      });
      reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
        url: '/api/1.0/points/' + this.state.teacherId,
        type: "json"
      }).then(function (data2) {
        _this2.setState({
          data: data2,
          spinning: false
        });
      }, function (err) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
        url: '/api/1.0/config/' + this.state.teacherId,
        type: "json"
      }).then(function (data2) {
        console.log(data2);

        _this3.setState({
          configData: data2
        });
      }, function (err) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
      });
      this.handleRefresh();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var data = this.state.data;
      var collapses = [];
      var tagStyle = {
        marginRight: 8,
        marginTop: 8
      };
      var prompt = this.state.configData.prompt;
      var promptPoints = this.state.configData.promptPoints;

      var _loop = function _loop(i) {
        _this4.formRefs[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this4.formRefsPerformance[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this4.formRefsPunishment[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        var cur = data[i];
        console.log(cur);
        collapses.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Collapse"].Panel, {
          header: cur.newOne ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", cur.year, " - ", cur.year + 1, " \u5B66\u5E74\u5EA6 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], null)) : "".concat(cur.year, " - ").concat(cur.year + 1, " \u5B66\u5E74\u5EA6"),
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SolutionOutlined"], null), " \u57FA\u672C\u5206\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          ref: _this4.formRefs[i],
          layout: "vertical",
          onFinish: function onFinish(msg) {
            _this4.setState({
              submitLoading: true
            });

            reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
              url: "/api/1.0/points/".concat(_this4.state.teacherId, "/in/").concat(cur.year),
              method: 'POST',
              data: msg
            }).then(function (resp) {
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("\u5DF2\u4FDD\u5B58 ".concat(cur.year, " - ").concat(cur.year + 1, " \u5B66\u5E74\u5EA6\u7684\u57FA\u672C\u5206\u6570\u3002"));

              _this4.setState({
                submitLoading: false
              });
            }, function (err) {
              _this4.setState({
                submitLoading: false
              });

              Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
            });
          },
          initialValues: cur
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          gutter: 24
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          label: "\u5C97\u4F4D\u804C\u8D23\u52A0\u5206",
          required: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "positionPoints",
          rules: [{
            required: true,
            message: '输入岗位职责加分'
          }, {
            type: 'number',
            message: '加分必须是数字'
          }, {
            min: 0,
            message: '加分不能为负数',
            type: 'number'
          }],
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
          style: {
            width: 200
          },
          placeholder: "\u8F93\u5165\u5C97\u4F4D\u804C\u8D23\u52A0\u5206"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, prompt.positionPoints.map(function (val, ind) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            key: 'promptA' + ind,
            style: tagStyle,
            onClick: function onClick() {
              _this4.formRefs[i].current.setFieldsValue({
                positionPoints: promptPoints.positionPoints[ind]
              });
            }
          }, val);
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          label: "\u5E08\u5FB7\u5E08\u98CE\u52A0\u5206",
          required: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "moralityPoints",
          rules: [{
            required: true,
            message: '输入师德师风加分'
          }, {
            type: 'number',
            message: '加分必须是数字'
          }, {
            min: 0,
            message: '加分不能为负数',
            type: 'number'
          }],
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
          style: {
            width: 200
          },
          placeholder: "\u8F93\u5165\u5E08\u5FB7\u5E08\u98CE\u52A0\u5206"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, prompt.moralityPoints.map(function (val, ind) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            key: 'promptA' + ind,
            style: tagStyle,
            onClick: function onClick() {
              _this4.formRefs[i].current.setFieldsValue({
                moralityPoints: promptPoints.moralityPoints[ind]
              });
            }
          }, val);
        }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          gutter: 24
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          label: "\u8003\u6838\u52A0\u5206",
          required: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Group, {
          compact: true,
          className: 'site-input-group-wrapper'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "assessmentPoints1",
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
          className: "site-input-left",
          style: {
            width: '20%',
            textAlign: 'center'
          },
          onChange: function onChange(value) {
            _this4.formRefs[i].current.setFieldsValue({
              assessmentPoints1: value,
              assessmentPoints: (value + (_this4.formRefs[i].current.getFieldsValue()['assessmentPoints2'] || 0)).toFixed(1)
            });
          },
          placeholder: "\u4E0A\u5B66\u671F"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          className: "site-input-split",
          style: {
            width: 40,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: 'none'
          },
          placeholder: "+",
          disabled: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "assessmentPoints2",
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
          className: "site-input-left site-input-right",
          style: {
            width: '20%',
            textAlign: 'center'
          },
          onChange: function onChange(value) {
            _this4.formRefs[i].current.setFieldsValue({
              assessmentPoints2: value,
              assessmentPoints: (value + (_this4.formRefs[i].current.getFieldsValue()['assessmentPoints1'] || 0)).toFixed(1)
            });
          },
          placeholder: "\u4E0B\u5B66\u671F"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          className: "site-input-split",
          style: {
            width: 40,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: 'none'
          },
          placeholder: "=",
          disabled: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "assessmentPoints",
          rules: [{
            required: true,
            message: '请输入考核加分'
          }, {
            min: 0,
            message: '加分不能为负数',
            type: 'number',
            transform: function transform(value) {
              return Number(value) || 0;
            }
          }, {
            type: 'number',
            message: '加分必须是数字',
            transform: function transform(value) {
              return Number(value) || 0;
            }
          }],
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          className: "site-input-right",
          style: {
            width: '20%'
          },
          placeholder: "\u8F93\u5165\u8003\u6838\u5F97\u5206"
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
          style: tagStyle,
          color: 'blue'
        }, "\u4E0A\u5B66\u671F\u540D\u6B21\uFF1A"), prompt.assessmentPoints.map(function (val, ind) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            key: 'promptA' + ind,
            style: tagStyle,
            onClick: function onClick() {
              _this4.formRefs[i].current.setFieldsValue({
                assessmentPoints1: promptPoints.assessmentPoints[ind],
                assessmentPoints: (promptPoints.assessmentPoints[ind] + (_this4.formRefs[i].current.getFieldsValue()['assessmentPoints2'] || 0)).toFixed(1)
              });
            }
          }, val);
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
          style: tagStyle,
          color: 'blue'
        }, "\u4E0B\u5B66\u671F\u540D\u6B21\uFF1A"), prompt.assessmentPoints.map(function (val, ind) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            key: 'promptA' + ind,
            style: tagStyle,
            onClick: function onClick() {
              _this4.formRefs[i].current.setFieldsValue({
                assessmentPoints2: promptPoints.assessmentPoints[ind],
                assessmentPoints: (promptPoints.assessmentPoints[ind] + (_this4.formRefs[i].current.getFieldsValue()['assessmentPoints1'] || 0)).toFixed(1)
              });
            }
          }, val);
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          label: "\u5DE5\u4F5C\u91CF\u52A0\u5206",
          required: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
          name: "workloadPoints",
          rules: [{
            required: true,
            message: '输入工作量加分'
          }, {
            type: 'number',
            message: '加分必须是数字'
          }, {
            min: 0,
            message: '加分不能为负数',
            type: 'number'
          }],
          noStyle: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
          style: {
            width: 200
          },
          placeholder: "\u8F93\u5165\u5DE5\u4F5C\u91CF\u52A0\u5206"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, prompt.workloadPoints.map(function (val, ind) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            key: 'promptA' + ind,
            style: tagStyle,
            onClick: function onClick() {
              _this4.formRefs[i].current.setFieldsValue({
                workloadPoints: promptPoints.workloadPoints[ind]
              });
            }
          }, val);
        }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          loading: _this4.state.submitLoading,
          htmlType: "submit"
        }, "\u63D0\u4EA4")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SmileOutlined"], null), " \u5DE5\u4F5C\u4E1A\u7EE9\u3001\u5B66\u672F\u6210\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          ref: _this4.formRefsPerformance[i],
          initialValues: {
            fake: cur.performances
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].List, {
          name: 'fake'
        }, function (fields, _ref) {
          var add = _ref.add,
              remove = _ref.remove;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, fields.map(function (field) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
              key: field.key,
              style: {
                display: 'flex',
                marginBottom: 8
              },
              align: "start"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              name: [field.name, 'title'],
              fieldKey: [field.fieldKey, 'title'],
              rules: [{
                required: true,
                message: '请输入标题'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              placeholder: "\u6807\u9898"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              name: [field.name, 'type'],
              fieldKey: [field.fieldKey, 'type'],
              rules: [{
                required: true,
                message: '请选择类别'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
              buttonStyle: "solid"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
              value: 1
            }, "\u5DE5\u4F5C\u4E1A\u7EE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
              value: 2
            }, "\u5B66\u672F\u6210\u679C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              name: [field.name, 'level'],
              fieldKey: [field.fieldKey, 'level'],
              rules: [{
                required: true,
                message: '请输入等级'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
              placeholder: "\u7B49\u7EA7",
              options: [{
                value: '国家级'
              }, {
                value: '省级'
              }, {
                value: '市级（含省厅）'
              }, {
                value: '区级（含市局）'
              }, {
                value: '区师校'
              }, {
                value: '集团活动荣誉'
              }, {
                value: '校级'
              }],
              style: {
                width: 150
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              label: '加分',
              name: [field.name, 'points'],
              fieldKey: [field.fieldKey, 'points'],
              rules: [{
                required: true,
                message: '请输入加分'
              }, {
                type: 'number',
                message: '加分必须是数字'
              }, {
                min: 0,
                message: '加分不能为负数',
                type: 'number'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
              style: {
                width: 70
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
              type: "vertical"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick() {
                _this4.formRefsPerformance[i].current.validateFields([['fake', field.name, 'title'], ['fake', field.name, 'points'], ['fake', field.name, 'level'], ['fake', field.name, 'type']]).then(function () {
                  var fakeData = _this4.formRefsPerformance[i].current.getFieldsValue().fake;

                  var perfData = fakeData[field.name];
                  var reqwestObj;

                  if (perfData.id) {
                    reqwestObj = {
                      url: '/api/1.0/performances/' + perfData.id,
                      method: 'POST',
                      data: _objectSpread(_objectSpread({
                        _method: 'PUT'
                      }, perfData), {}, {
                        teacher_basic_id: _this4.state.teacherId,
                        year: cur.year
                      }),
                      type: 'json'
                    };
                  } else {
                    reqwestObj = {
                      url: '/api/1.0/performances/',
                      method: 'POST',
                      data: _objectSpread(_objectSpread({}, perfData), {}, {
                        teacher_basic_id: _this4.state.teacherId,
                        year: cur.year
                      }),
                      type: 'json'
                    };
                  }

                  var submitLoading = antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading('提交中...');
                  reqwest__WEBPACK_IMPORTED_MODULE_1___default()(reqwestObj).then(function (msg) {
                    submitLoading();
                    setTimeout(function () {
                      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('更新成功！');
                    }, 500); //this.handleRefresh()

                    fakeData[field.name].id = msg.newID; //console.log(fakeData[field.name])

                    _this4.formRefsPerformance[i].current.setFieldsValue({
                      fake: fakeData
                    });
                  }, function (err) {
                    submitLoading();
                    Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
                  });
                });
              },
              shape: "circle",
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckOutlined"], null),
              type: "primary",
              size: 'small'
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
              title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u8BB0\u5F55\u5417\uFF1F",
              onConfirm: function onConfirm() {
                var perfData = _this4.formRefsPerformance[i].current.getFieldsValue().fake[field.name];

                var reqwestObj;

                if (perfData.id) {
                  reqwestObj = {
                    url: '/api/1.0/performances/' + perfData.id,
                    method: 'POST',
                    data: {
                      _method: 'DELETE'
                    },
                    type: 'json'
                  };
                  var submitLoading = antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading('删除中...');
                  reqwest__WEBPACK_IMPORTED_MODULE_1___default()(reqwestObj).then(function (msg) {
                    submitLoading();
                    setTimeout(function () {
                      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('删除成功！');
                    }, 500);
                  }, function (err) {
                    submitLoading();
                    Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
                  });
                  remove(field.name);
                } else {
                  remove(field.name);
                }
              } //okText="确定"
              //cancelText="取消"

            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              danger: true,
              shape: "circle",
              size: 'small',
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], null)
            })))));
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "dashed",
            onClick: function onClick() {
              add();
            },
            block: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null), " \u589E\u52A0\u4E00\u6761\u8BB0\u5F55")));
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FrownOutlined"], null), " \u60E9\u7F5A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          ref: _this4.formRefsPunishment[i],
          initialValues: {
            fakePunishments: cur.punishments
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].List, {
          name: 'fakePunishments'
        }, function (fields, _ref2) {
          var add = _ref2.add,
              remove = _ref2.remove;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, fields.map(function (field) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
              key: field.key,
              style: {
                display: 'flex',
                marginBottom: 8
              },
              align: "start"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              name: [field.name, 'description'],
              fieldKey: [field.fieldKey, 'description'],
              rules: [{
                required: true,
                message: '请输入惩罚描述'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              placeholder: "\u60E9\u7F5A\u63CF\u8FF0"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              name: [field.name, 'type'],
              fieldKey: [field.fieldKey, 'type'],
              rules: [{
                required: true,
                message: '请选择类别'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
              style: {
                width: 150
              },
              placeholder: '惩罚类别'
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
              value: 1
            }, "\u5E08\u5FB7\u5E08\u98CE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
              value: 2
            }, "\u65E0\u6545\u6F0F\u5C97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
              value: 3
            }, "\u5B66\u672F\u4E0D\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
              value: 4
            }, "\u75C5\u4E8B\u5047\u8D85 2 \u4E2A\u6708"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              label: '惩罚年限',
              name: [field.name, 'penaltyYears'],
              fieldKey: [field.fieldKey, 'penaltyYears'],
              rules: [{
                required: true,
                message: '请输入惩罚年限'
              }, {
                min: 0,
                message: '年限不能为负数',
                type: 'number'
              }, {
                type: 'number',
                message: '年限必须是数字'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
              style: {
                width: 70
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
              label: '扣分',
              name: [field.name, 'points'],
              fieldKey: [field.fieldKey, 'points'],
              rules: [{
                required: true,
                message: '请输入扣分'
              }, {
                type: 'number',
                message: '扣分必须是数字'
              }, {
                min: 0,
                message: '请直接输入扣除分数的绝对值',
                type: 'number'
              }]
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
              style: {
                width: 70
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
              type: "vertical"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick() {
                _this4.formRefsPunishment[i].current.validateFields([['fakePunishments', field.name, 'description'], ['fakePunishments', field.name, 'points'], ['fakePunishments', field.name, 'penaltyYears'], ['fakePunishments', field.name, 'type']]).then(function () {
                  var fakePunishmentsData = _this4.formRefsPunishment[i].current.getFieldsValue().fakePunishments;

                  var perfData = fakePunishmentsData[field.name];
                  var reqwestObj;

                  if (perfData.id) {
                    reqwestObj = {
                      url: '/api/1.0/punishments/' + perfData.id,
                      method: 'POST',
                      data: _objectSpread(_objectSpread({
                        _method: 'PUT'
                      }, perfData), {}, {
                        teacher_basic_id: _this4.state.teacherId,
                        year: cur.year
                      }),
                      type: 'json'
                    };
                  } else {
                    reqwestObj = {
                      url: '/api/1.0/punishments/',
                      method: 'POST',
                      data: _objectSpread(_objectSpread({}, perfData), {}, {
                        teacher_basic_id: _this4.state.teacherId,
                        year: cur.year
                      }),
                      type: 'json'
                    };
                  }

                  var submitLoading = antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading('提交中...');
                  reqwest__WEBPACK_IMPORTED_MODULE_1___default()(reqwestObj).then(function (msg) {
                    submitLoading();
                    setTimeout(function () {
                      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('更新成功！');
                    }, 500); //this.handleRefresh()

                    fakePunishmentsData[field.name].id = msg.newID;
                    console.log(fakePunishmentsData[field.name]);

                    _this4.formRefsPunishment[i].current.setFieldsValue({
                      fakePunishments: fakePunishmentsData
                    });
                  }, function (err) {
                    submitLoading();
                    Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
                  });
                });
              },
              shape: "circle",
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckOutlined"], null),
              size: 'small',
              type: 'primary'
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
              title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u8BB0\u5F55\u5417\uFF1F",
              onConfirm: function onConfirm() {
                var perfData = _this4.formRefsPunishment[i].current.getFieldsValue().fakePunishments[field.name];

                var reqwestObj;

                if (perfData.id) {
                  reqwestObj = {
                    url: '/api/1.0/punishments/' + perfData.id,
                    method: 'POST',
                    data: {
                      _method: 'DELETE'
                    },
                    type: 'json'
                  };
                  var submitLoading = antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading('删除中...');
                  reqwest__WEBPACK_IMPORTED_MODULE_1___default()(reqwestObj).then(function (msg) {
                    submitLoading();
                    setTimeout(function () {
                      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('删除成功！');
                    }, 500);
                  }, function (err) {
                    submitLoading();
                    Object(_helper__WEBPACK_IMPORTED_MODULE_6__["handleErr"])(err);
                  });
                  remove(field.name);
                } else {
                  remove(field.name);
                }
              } //okText="确定"
              //cancelText="取消"

            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              danger: true,
              shape: "circle",
              icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], null),
              size: 'small'
            })))));
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "dashed",
            onClick: function onClick() {
              add();
            },
            block: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null), " \u589E\u52A0\u4E00\u6761\u8BB0\u5F55")));
        })))));
      };

      for (var i = 0; i < data.length; i++) {
        _loop(i);
      }

      var outerCollapse;

      if (data.length === 0) {
        outerCollapse = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Empty"], {
          description: "\u6682\u65F6\u6CA1\u6709\u6570\u636E\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u6DFB\u52A0"
        });
      } else {
        outerCollapse = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          style: {
            width: '100%'
          },
          onChange: function onChange(data) {
            _this4.setState({
              activeKey: data
            });
          },
          activeKey: this.state.activeKey
        }, collapses);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
        direction: "vertical",
        style: {
          width: '100%'
        },
        size: 'middle'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], {
        onBack: function onBack() {
          return window.history.back();
        },
        size: "small",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], null), " \u4FEE\u6539\u5206\u6570"),
        className: 'site-page-header'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
        active: true,
        loading: this.state.infoLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"], {
        title: "\u6559\u5E08\u57FA\u672C\u4FE1\u606F"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], null), " \u59D3\u540D")
      }, this.state.teacherData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ApartmentOutlined"], null), " \u5C97\u4F4D")
      }, ['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][this.state.teacherData.group]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StockOutlined"], null), " \u804C\u7EA7")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: ['', 'green', 'orange', 'red', 'purple', 'geekblue'][this.state.teacherData.rank]
      }, ['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][this.state.teacherData.rank])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CalendarOutlined"], null), " \u53C2\u52A0\u5DE5\u4F5C\u3001\u804C\u7EA7\u8BC4\u9009\u5E74\u4EFD")
      }, this.state.teacherData.fromYear, " \u5E74"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["IdcardOutlined"], null), " \u8EAB\u4EFD\u8BC1\u53F7")
      }, this.state.teacherData.IDNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["IdcardOutlined"], null), " \u6570\u636E\u72B6\u6001")
      }, function () {
        var value = _this4.state.teacherData.metaData;
        console.log(_this4.state);
        return value.err ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
          key: value.id,
          content: function () {
            var val = value.errYears.map(function (year) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
                key: value.id + '' + year
              }, year, " - ", year + 1, " \u5B66\u5E74\u5EA6");
            });
            var len = val.length;

            if (!len) {
              return '教师参加工作、职级评选年份设置有误。';
            }

            if (len >= 4) {
              val = val.slice(0, 3);
              val.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
                key: value.id + '...'
              }, "\u7B49 ", len, " \u6761\u6570\u636E"));
            }

            return val;
          }(),
          title: "\u7F3A\u5931\u7684\u6570\u636E\uFF1A"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
          status: "error",
          text: "\u6570\u636E\u4E0D\u5168\uFF0C\u9700\u8981\u8865\u5145"
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
          status: "success",
          text: "\u6570\u636E\u5B8C\u6574"
        });
      }())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
        spinning: this.state.spinning
      }, outerCollapse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
        direction: "horizontal"
      }, "\u521B\u5EFA\u65B0\u5B66\u5E74\u6570\u636E\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], {
        onChange: function onChange(value) {
          _this4.setState({
            newYear: value.year()
          });
        },
        defaultValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(),
        picker: "year",
        style: {
          width: 80
        },
        allowClear: false
      }), " - ".concat(this.state.newYear + 1, " \u5B66\u5E74\u5EA6 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "dashed",
        onClick: function onClick() {
          for (var _i in _this4.state.data) {
            if (_this4.state.data[_i].year === _this4.state.newYear) {
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].warning("\u5DF2\u7ECF\u5B58\u5728 ".concat(_this4.state.newYear, " \u5E74\u7684\u5F97\u5206\u6570\u636E\uFF0C\u76F4\u63A5\u4FEE\u6539\u5373\u53EF\u3002"));
              return;
            }
          }

          var newData = _this4.state.data;
          newData.push({
            year: _this4.state.newYear,
            newOne: true
          });

          _this4.setState({
            data: newData,
            activeKey: [].concat(_toConsumableArray(_this4.state.activeKey), [newData.length - 1])
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null), "\u521B\u5EFA")));
    }
  }]);

  return PointsEditForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PointsEditForm);

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/*! exports provided: handleErr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErr", function() { return handleErr; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


function handleErr(err) {
  var login = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (err.status === 500) {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('服务器错误，请重试或联系系统管理员。');
  } else if (err.status === 503) {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('服务器正在维护，请稍后重试。');
  } else if (err.status === 422) {
    if (login === 1) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('登陆失败。');
    } else if (login === 2) {
      var errs = JSON.parse(err.response).errors;

      if (errs) {
        for (var errTxt in errs) {
          antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(errs[errTxt]);
        }
      }

      if (errs.length === 0) antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('数据不合法。');
    } else {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('数据不合法。');
    }
  } else if (err.status === 429) {
    if (login) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('尝试登陆次数过多，请稍后重试。');
    } else {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('请求次数过多，请稍后重试。');
    }
  } else if (err.status === 401) {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('没有权限，请尝试重新登陆。');
  } else if (err.status === 200) {
    //window.location.replace(err.responseURL);
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].warning('请先退出当前账号。');
  } else {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(JSON.parse(err.response).message);
  }
}



/***/ })

}]);