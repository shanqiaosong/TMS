(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/components/AddForm.js":
/*!********************************************!*\
  !*** ./resources/js/components/AddForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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





var AddForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AddForm, _React$Component);

  var _super = _createSuper(AddForm);

  function AddForm(props) {
    var _this;

    _classCallCheck(this, AddForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      IDNumHelper: ' ',
      hasFeedback: true,
      IDNumStatus: ' ',
      IDNumValue: ' ',
      loading: false,
      components: []
    });

    _defineProperty(_assertThisInitialized(_this), "formRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      _this.formRef.current.validateFields().then(function () {
        if (_this.state.IDNumStatus == 'success') {
          var val = _this.formRef.current.getFieldsValue();

          val.fromYear = val.fromYear.year();
          console.log(val);

          _this.setState({
            loading: true
          });

          reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
            url: '/api/1.0/teachers',
            method: 'post',
            data: val,
            type: 'json'
          }).then(function (msg) {
            console.log(msg);

            _this.setState({
              components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: '添加成功。',
                key: Date.parse(new Date()),
                type: "success",
                showIcon: true
              })],
              loading: false
            });

            _this.props.refresh();
          }, function (err, msg) {
            var components = [];
            console.log(err, msg);

            if (err.status === 422) {
              var errs = JSON.parse(err.response).errors;

              for (var i in errs) {
                for (var j = 0; j < errs[i].length; j++) {
                  components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                    message: errs[i][j],
                    key: Date.parse(new Date()),
                    type: "error",
                    showIcon: true,
                    closable: true
                  }));
                }
              }
            } else if (err.status === 500) {
              components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: '服务器错误，请重试。',
                key: Date.parse(new Date()),
                type: "error",
                showIcon: true,
                closable: true
              }));
            } else {
              components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: JSON.parse(err.response).message,
                key: Date.parse(new Date()),
                type: "error",
                showIcon: true,
                closable: true
              }));
            }

            _this.setState({
              components: components,
              loading: false
            });
          });
        }
      }); //this.formRef.dispatchEvent(new Event('submit'))

    });

    return _this;
  }

  _createClass(AddForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
        title: "\u65B0\u589E\u6559\u5E08",
        width: 720,
        onClose: this.props.onClose,
        visible: this.props.visible,
        bodyStyle: {
          paddingBottom: 80
        },
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            textAlign: 'right'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: function onClick() {
            _this2.formRef.current.resetFields();

            _this2.setState({
              loading: false,
              components: [],
              IDNumHelper: ' ',
              IDNumStatus: ' '
            });
          },
          style: {
            marginRight: 16
          }
        }, "\u6E05\u9664"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          loading: this.state.loading,
          onClick: this.handleSubmit,
          htmlType: "submit",
          type: "primary"
        }, "\u63D0\u4EA4"))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, this.state.components), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        ref: this.formRef,
        layout: "vertical",
        onFinish: function onFinish(msg) {
          console.log(msg);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "name",
        label: "\u59D3\u540D",
        rules: [{
          required: true,
          message: '输入教师姓名'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "\u8F93\u5165\u6559\u5E08\u59D3\u540D"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "IDNum",
        label: "\u8EAB\u4EFD\u8BC1\u53F7",
        rules: [{
          required: true,
          message: '输入18位身份证号'
        }],
        hasFeedback: true,
        validateStatus: this.state.IDNumStatus,
        help: this.state.IDNumHelper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        style: {
          width: '100%'
        },
        placeholder: "\u8F93\u516518\u4F4D\u8EAB\u4EFD\u8BC1\u53F7",
        rules: [{
          required: true,
          message: '请输入身份证号'
        }],
        onChange: function onChange(e) {
          _this2.formRef.current.setFieldsValue({
            IDNum: e.target.value.toUpperCase()
          });
        },
        onBlur: function onBlur(e) {
          if (e.target.value == '') {
            return;
          }

          _this2.setState({
            IDNumStatus: 'validating',
            IDNumHelper: '验证中'
          });

          reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
            url: '/api/1.0/helpers',
            data: {
              IDNum: e.target.value
            },
            method: 'get',
            type: 'json'
          }).then(function (data) {
            if (data.result) {
              _this2.setState({
                IDNumStatus: 'success',
                IDNumHelper: '验证成功'
              });
            } else {
              _this2.setState({
                IDNumStatus: 'error',
                IDNumHelper: data.help
              });
            }
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "group",
        label: "\u5C97\u4F4D",
        rules: [{
          required: true,
          message: '请选择岗位'
        }],
        initialValue: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
        buttonStyle: "solid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "1"
      }, "\u9886\u5BFC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "2"
      }, "\u8003\u8BD5\u5B66\u79D1\u4EFB\u8BFE\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "3"
      }, "\u975E\u8003\u8BD5\u5B66\u79D1\u4EFB\u8BFE\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "4"
      }, "\u6559\u8F85"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "rank",
        label: "\u804C\u7EA7",
        rules: [{
          required: true,
          message: '请选择职级'
        }],
        initialValue: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
        buttonStyle: "solid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "1"
      }, "\u521D\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "2"
      }, "\u4E8C\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "3"
      }, "\u4E00\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "4"
      }, "\u9AD8\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: "5"
      }, "\u6B63\u9AD8\u7EA7\u6559\u5E08"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "fromYear",
        label: "\u53C2\u52A0\u5DE5\u4F5C\u3001\u804C\u7EA7\u8BC4\u9009\u5E74\u4EFD",
        rules: [{
          required: true,
          message: '请输入评选年份'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
        picker: "year"
      })))));
    }
  }]);

  return AddForm;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddForm);

/***/ }),

/***/ "./resources/js/components/EditForm.js":
/*!*********************************************!*\
  !*** ./resources/js/components/EditForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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





var EditForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EditForm, _React$Component);

  var _super = _createSuper(EditForm);

  function EditForm(props) {
    var _this;

    _classCallCheck(this, EditForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      IDNumHelper: ' ',
      hasFeedback: true,
      IDNumStatus: '',
      IDNumValue: ' ',
      loading: false,
      components: [],
      initVal: {}
    });

    _defineProperty(_assertThisInitialized(_this), "formRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      _this.formRef.current.validateFields().then(function () {
        console.log(_this.state.IDNumStatus);

        if (_this.state.IDNumStatus === 'success' || _this.state.IDNumStatus === '') {
          var val = _this.formRef.current.getFieldsValue();

          val.fromYear = val.fromYear.year();
          val._method = 'PUT';
          console.log(val);

          _this.setState({
            loading: true
          });

          reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
            url: '/api/1.0/teachers/' + _this.props.editID,
            method: 'post',
            data: val,
            type: 'json'
          }).then(function (msg) {
            console.log(msg);

            _this.setState({
              components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: '修改成功。',
                key: Date.parse(new Date()),
                type: "success",
                showIcon: true
              })],
              loading: false
            });

            _this.props.refresh();
          }, function (err, msg) {
            var components = [];
            console.log(err, msg);

            if (err.status === 422) {
              var errs = JSON.parse(err.response).errors;

              for (var i in errs) {
                for (var j = 0; j < errs[i].length; j++) {
                  components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                    message: errs[i][j],
                    key: Date.parse(new Date()),
                    type: "error",
                    showIcon: true,
                    closable: true
                  }));
                }
              }
            } else if (err.status === 500) {
              components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: '服务器错误，请重试。',
                key: Date.parse(new Date()),
                type: "error",
                showIcon: true,
                closable: true
              }));
            } else {
              components.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
                message: JSON.parse(err.response).message,
                key: Date.parse(new Date()),
                type: "error",
                showIcon: true,
                closable: true
              }));
            }

            _this.setState({
              components: components,
              loading: false
            });
          });
        }
      }); //this.formRef.dispatchEvent(new Event('submit'))

    });

    return _this;
  }

  _createClass(EditForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onRef(this);
    }
  }, {
    key: "handleRefresh",
    value: function handleRefresh() {
      //console.log('refrsh')
      this.setState({
        loading: false,
        components: [],
        IDNumHelper: ' ',
        IDNumStatus: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this; //console.log('reload')
      //.log(this.props.initVal)


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
        destroyOnClose: true,
        title: "\u4FEE\u6539\u6559\u5E08\u4FE1\u606F",
        width: 720,
        onClose: this.props.onClose,
        visible: this.props.visible,
        bodyStyle: {
          paddingBottom: 80
        },
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            textAlign: 'right'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: function onClick() {
            _this2.formRef.current.resetFields();

            _this2.handleRefresh();
          },
          style: {
            marginRight: 16
          }
        }, "\u91CD\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          loading: this.state.loading,
          onClick: this.handleSubmit,
          htmlType: "submit",
          type: "primary"
        }, "\u63D0\u4EA4"))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, this.state.components), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        ref: this.formRef,
        layout: "vertical",
        onFinish: function onFinish(msg) {
          console.log(msg);
        },
        initialValues: this.props.initVal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "name",
        label: "\u59D3\u540D",
        rules: [{
          required: true,
          message: '输入教师姓名'
        }, {
          min: 2,
          message: '姓名最少两个字符'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "\u8F93\u5165\u6559\u5E08\u59D3\u540D"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "IDNum",
        label: "\u8EAB\u4EFD\u8BC1\u53F7",
        rules: [{
          required: true,
          message: '输入18位身份证号'
        }],
        hasFeedback: true,
        validateStatus: this.state.IDNumStatus,
        help: this.state.IDNumHelper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        style: {
          width: '100%'
        },
        placeholder: "\u8F93\u516518\u4F4D\u8EAB\u4EFD\u8BC1\u53F7",
        rules: [{
          required: true,
          message: '请输入身份证号'
        }],
        onChange: function onChange(e) {
          _this2.formRef.current.setFieldsValue({
            IDNum: e.target.value.toUpperCase()
          });
        },
        onBlur: function onBlur(e) {
          if (e.target.value == '') {
            return;
          }

          _this2.setState({
            IDNumStatus: 'validating',
            IDNumHelper: '验证中'
          });

          reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
            url: '/api/1.0/helpers',
            data: {
              IDNum: e.target.value
            },
            method: 'get',
            type: 'json'
          }).then(function (data) {
            if (data.result || data.help === '身份证号已存在') {
              _this2.setState({
                IDNumStatus: 'success',
                IDNumHelper: '验证成功'
              });
            } else {
              _this2.setState({
                IDNumStatus: 'error',
                IDNumHelper: data.help
              });
            }
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "group",
        label: "\u5C97\u4F4D",
        rules: [{
          required: true,
          message: '请选择岗位'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
        buttonStyle: "solid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 1
      }, "\u9886\u5BFC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 2
      }, "\u8003\u8BD5\u5B66\u79D1\u4EFB\u8BFE\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 3
      }, "\u975E\u8003\u8BD5\u5B66\u79D1\u4EFB\u8BFE\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 4
      }, "\u6559\u8F85"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "rank",
        label: "\u804C\u7EA7",
        rules: [{
          required: true,
          message: '请选择职级'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
        buttonStyle: "solid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 1
      }, "\u521D\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 2
      }, "\u4E8C\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 3
      }, "\u4E00\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 4
      }, "\u9AD8\u7EA7\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
        value: 5
      }, "\u6B63\u9AD8\u7EA7\u6559\u5E08"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "fromYear",
        label: "\u53C2\u52A0\u5DE5\u4F5C\u3001\u804C\u7EA7\u8BC4\u9009\u5E74\u4EFD",
        rules: [{
          required: true,
          message: '请输入评选年份'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
        picker: "year"
      })))));
    }
  }]);

  return EditForm;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditForm);

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