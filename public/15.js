(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/components/SubmitBind.js":
/*!***********************************************!*\
  !*** ./resources/js/components/SubmitBind.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ "./resources/js/helper.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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



var Step = antd__WEBPACK_IMPORTED_MODULE_1__["Steps"].Step;

var Text = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph;





var SubmitBind = /*#__PURE__*/function (_React$Component) {
  _inherits(SubmitBind, _React$Component);

  var _super = _createSuper(SubmitBind);

  function SubmitBind() {
    var _this;

    _classCallCheck(this, SubmitBind);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      teacherData: null,
      infoLoading: true,
      requestIDNum: ''
    });

    _defineProperty(_assertThisInitialized(_this), "formRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef());

    _defineProperty(_assertThisInitialized(_this), "applyForm", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        ref: _this.formRef,
        layout: "inline",
        key: 'applyForm',
        onFinish: function onFinish(msg) {
          if (msg.IDNum === '') {
            return;
          }

          _this.setState({
            IDNumStatus: 'validating',
            IDNumHelper: '验证中'
          });

          reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
            url: '/api/1.0/helpers',
            data: {
              IDNum: msg.IDNum
            },
            method: 'get',
            type: 'json'
          }).then(function (data) {
            if (data.result || data.help === '身份证号已存在') {
              console.log(_this.state.requestIDNum);
              reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
                url: '/api/1.0/apply',
                data: {
                  IDNum: msg.IDNum
                }
              }).then(function () {
                antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('申请成功！');

                _this.props.refresh();

                _this.setState({
                  IDNumHelper: ' ',
                  IDNumStatus: ''
                });
              }, function (err) {
                Object(_helper__WEBPACK_IMPORTED_MODULE_4__["handleErr"])(err);
              });
            } else {
              _this.setState({
                IDNumStatus: 'error',
                IDNumHelper: data.help
              });
            }
          });
        },
        style: {
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        },
        initialValues: _this.props.initVal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: "IDNum",
        label: "\u8EAB\u4EFD\u8BC1\u53F7",
        hasFeedback: true,
        validateStatus: _this.state.IDNumStatus,
        help: _this.state.IDNumHelper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        style: {
          width: '100%'
        },
        placeholder: "\u8F93\u516518\u4F4D\u8EAB\u4EFD\u8BC1\u53F7",
        rules: [{
          required: true,
          message: '请输入身份证号'
        }],
        onChange: function onChange(e) {
          _this.formRef.current.setFieldsValue({
            IDNum: e.target.value.toUpperCase()
          });
        },
        onBlur: function onBlur(e) {}
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        htmlType: "submit",
        type: "primary",
        key: "console"
      }, "\u7533\u8BF7"));
    });

    return _this;
  }

  _createClass(SubmitBind, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
        url: '/api/1.0/binding/getInfo/',
        type: 'json'
      }).then(function (value) {
        console.log(value);

        _this2.setState({
          bindingData: value,
          infoLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.info);

      if (this.props.info.res === -1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
          active: true
        });
      } else if (this.props.info.res === -3) {
        if (this.props.info.status === 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
            current: 1
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u63D0\u4EA4\u7533\u8BF7",
            description: "\u63D0\u4EA4\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u53F7"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u5B66\u6821\u5BA1\u6838",
            description: "\u5B66\u6821\u9700\u8981\u5BA1\u6838\u5339\u914D"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u7ED1\u5B9A\u6210\u529F",
            description: "\u7ED1\u5B9A\u6210\u529F\u5373\u53EF\u67E5\u770B\u6210\u7EE9"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
            title: "审核中，请静候佳音",
            subTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u76EE\u524D\u7533\u8BF7\u7684\u8EAB\u4EFD\u8BC1\u53F7\u662F\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
              style: {
                fontFamily: 'Consolas'
              }
            }, this.props.info.pendingIDNum), "\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u91CD\u65B0\u7533\u8BF7\u3002"),
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], null),
            extra: [this.applyForm()]
          }));
        } else if (this.props.info.status === 2) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
            current: 2
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u63D0\u4EA4\u7533\u8BF7",
            description: "\u63D0\u4EA4\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u53F7"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u5B66\u6821\u5BA1\u6838",
            description: "\u5B66\u6821\u9700\u8981\u5BA1\u6838\u5339\u914D"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u7ED1\u5B9A\u6210\u529F",
            description: "\u7ED1\u5B9A\u6210\u529F\u5373\u53EF\u67E5\u770B\u6210\u7EE9"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
            title: '已经批准',
            subTitle: '若无法查看成绩，请联系管理员。',
            extra: [this.applyForm()]
          }));
        } else if (this.props.info.status === 3) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
            current: 1,
            status: 'error'
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u63D0\u4EA4\u7533\u8BF7",
            description: "\u63D0\u4EA4\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u53F7"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u5B66\u6821\u5BA1\u6838",
            description: "\u5B66\u6821\u9700\u8981\u5BA1\u6838\u5339\u914D"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u7ED1\u5B9A\u6210\u529F",
            description: "\u7ED1\u5B9A\u6210\u529F\u5373\u53EF\u67E5\u770B\u6210\u7EE9"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
            status: 'error',
            title: '请求被拒绝',
            subTitle: '请检查信息是否有误，并重新申请。',
            extra: [this.applyForm()]
          }));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
            current: 0
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u63D0\u4EA4\u7533\u8BF7",
            description: "\u63D0\u4EA4\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u53F7"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u5B66\u6821\u5BA1\u6838",
            description: "\u5B66\u6821\u9700\u8981\u5BA1\u6838\u5339\u914D"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
            title: "\u7ED1\u5B9A\u6210\u529F",
            description: "\u7ED1\u5B9A\u6210\u529F\u5373\u53EF\u67E5\u770B\u6210\u7EE9"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
            title: "\u5C1A\u672A\u63D0\u4EA4\u7ED1\u5B9A\u7533\u8BF7\uFF0C\u8BF7\u7533\u8BF7\u8981\u7ED1\u5B9A\u7684\u8EAB\u4EFD\u8BC1\u53F7\u3002",
            extra: [this.applyForm()]
          }));
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
          current: 3
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
          title: "\u63D0\u4EA4\u7533\u8BF7",
          description: "\u63D0\u4EA4\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u53F7"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
          title: "\u5B66\u6821\u5BA1\u6838",
          description: "\u5B66\u6821\u9700\u8981\u5BA1\u6838\u5339\u914D"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Step, {
          title: "\u7ED1\u5B9A\u6210\u529F",
          description: "\u7ED1\u5B9A\u6210\u529F\u5373\u53EF\u67E5\u770B\u6210\u7EE9"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
          status: "success",
          title: "\u60A8\u5DF2\u6210\u529F\u7ED1\u5B9A\uFF01",
          subTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u60A8\u73B0\u5728\u7ED1\u5B9A\u7684\u8EAB\u4EFD\u8BC1\u53F7\u662F\uFF1A", this.props.info.IDNum, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), "\u82E5\u60F3\u6362\u7ED1\uFF0C\u8BF7\u8054\u7CFB\u5B66\u6821\u6216\u7CFB\u7EDF\u7BA1\u7406\u5458\u3002"),
          extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            key: 'feedback',
            type: "primary"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            to: '/home/feedback'
          }, "\u53CD\u9988"))]
        }));
      }
    }
  }]);

  return SubmitBind;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SubmitBind);

/***/ })

}]);