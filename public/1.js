(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/Explain.js":
/*!********************************************!*\
  !*** ./resources/js/components/Explain.js ***!
  \********************************************/
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




var Text = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph;




var Explain = /*#__PURE__*/function (_React$Component) {
  _inherits(Explain, _React$Component);

  var _super = _createSuper(Explain);

  function Explain() {
    var _this;

    _classCallCheck(this, Explain);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      teacherData: null,
      infoLoading: true
    });

    return _this;
  }

  _createClass(Explain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
        url: '/api/1.0/score/detail/' + this.props.resultID,
        type: 'json'
      }).then(function (value) {
        console.log(value);

        _this2.setState({
          teacherData: value,
          infoLoading: false
        });
      }, function (err) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_4__["handleErr"])(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      //return <p></p>
      if (!this.state.teacherData) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
        loading: true,
        active: true
      }));
      var yearList = this.state.teacherData.detail.map(function (yearData) {
        var year = Object.keys(yearData)[0];
        var info = yearData[year].info;
        var kParam = yearData[year].kParam;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          type: "inner",
          title: "".concat(year, " - ").concat(Number(year) + 1, " \u5B66\u5E74\u5EA6"),
          key: year
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SolutionOutlined"], null), " \u57FA\u672C\u5206\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"], {
          column: 2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u5C97\u4F4D\u804C\u8D23\u52A0\u5206")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: "success"
        }, info.detail.positionPoints)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u5E08\u5FB7\u5E08\u98CE\u52A0\u5206")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: "success"
        }, info.detail.moralityPoints)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u8003\u6838\u52A0\u5206")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: "success"
        }, info.detail.assessmentPoints)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u5DE5\u4F5C\u91CF\u52A0\u5206")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: "success"
        }, info.detail.workloadPoints)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "\u5DE5\u4F5C\u8D44\u5386\u52A0\u5206")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: "success"
        }, info.detail.qualificationPoints))), info.detail.performances.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SmileOutlined"], null), " \u5DE5\u4F5C\u4E1A\u7EE9\u3001\u5B66\u672F\u6210\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", null, info.detail.performances.map(function (performance) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
            key: performance.id
          }, "\u56E0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            strong: true
          }, performance.level), " ", performance.type === 1 ? '工作业绩' : '学术成果', "\uFF1A\u201C", performance.title, "\u201D \u83B7\u5F97 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            type: "success"
          }, performance.points), " \u5206\u52A0\u5206\u3002");
        })))) : null, info.detail.punishments.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FrownOutlined"], null), " \u60E9\u7F5A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", null, info.detail.punishments.map(function (punishments) {
          var reason = ['', '师德师风', '无故漏岗', '学术不端', '病事假超 2 个月'][punishments.type];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
            key: punishments.id
          }, "\u56E0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            strong: true
          }, reason), " \uFF1A\u201C", punishments.description, "\u201D \u6263\u9664 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            type: "danger"
          }, punishments.points), " \u5206\u3002", punishments.penaltyYears ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, punishments.penaltyYears, " \u5E74\u5185\u4E0D\u53EF\u664B\u5347\u3002") : '');
        })))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
          orientation: "left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SolutionOutlined"], null), " \u6C47\u603B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          strong: true
        }, "\u5E74\u5EA6\u6C47\u603B\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          strong: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u6743\u91CD"
        }, kParam), " \xD7 ( "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          type: 'success'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u5C97\u4F4D\u804C\u8D23\u52A0\u5206"
        }, info.detail.positionPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " + "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u5E08\u5FB7\u5E08\u98CE\u52A0\u5206"
        }, info.detail.moralityPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " + "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u8003\u6838\u52A0\u5206"
        }, info.detail.assessmentPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " + "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u5DE5\u4F5C\u91CF\u52A0\u5206"
        }, info.detail.workloadPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " + "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u5DE5\u4F5C\u8D44\u5386\u52A0\u5206"
        }, info.detail.qualificationPoints), info.detail.performances.map(function (value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            key: value.id,
            type: 'success'
          }, " + ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
            title: "\u5DE5\u4F5C\u4E1A\u7EE9\u3001\u5B66\u672F\u6210\u679C\u52A0\u5206"
          }, value.points));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, info.detail.punishments.map(function (value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
            key: value.id,
            type: 'danger'
          }, " - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
            title: "\u60E9\u7F5A\u6263\u5206"
          }, value.points));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          strong: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " ) = "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "\u5E74\u5EA6\u603B\u5206"
        }, kParam, " \xD7 ", info.totalPoint))), info.resultInPenalty ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
          message: "\u4E0D\u53EF\u664B\u5347",
          description: "\u7531\u4E8E\u672C\u5B66\u5E74\u7684\u60E9\u7F5A\uFF0C\u4E0D\u53EF\u664B\u5347\u3002",
          type: "error",
          showIcon: true
        }) : '');
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
        onBack: this.props.onClose,
        size: "small",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, this.state.teacherData.year, " \u5E74\u5206\u6570\u89E3\u91CA"),
        className: 'site-page-header'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
        active: true,
        loading: this.state.infoLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"], {
        column: 2,
        title: "\u6559\u5E08\u57FA\u672C\u4FE1\u606F"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null), " \u59D3\u540D")
      }, this.state.teacherData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ApartmentOutlined"], null), " \u5C97\u4F4D")
      }, ['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][this.state.teacherData.group]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StockOutlined"], null), " \u804C\u7EA7")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        color: ['', 'green', 'orange', 'red', 'purple', 'geekblue'][this.state.teacherData.rank]
      }, ['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][this.state.teacherData.rank])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CalendarOutlined"], null), " \u53C2\u52A0\u5DE5\u4F5C\u3001\u804C\u7EA7\u8BC4\u9009\u5E74\u4EFD")
      }, this.state.teacherData.fromYear, " \u5E74"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["IdcardOutlined"], null), " \u8EAB\u4EFD\u8BC1\u53F7")
      }, this.state.teacherData.IDNum)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
        direction: 'vertical'
      }, yearList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        type: "inner",
        title: '分数汇总'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
        strong: true
      }, this.state.teacherData.detail.map(function (yearData, index) {
        var year = Object.keys(yearData)[0];
        var info = yearData[year].info;
        var kParam = yearData[year].kParam;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
          key: year
        }, index ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "".concat(year, " - ").concat(Number(year) + 1, " \u5B66\u5E74\u5EA6")
        }, " + ( ", kParam, " \xD7 ", info.totalPoint, " )") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: "".concat(year, " - ").concat(Number(year) + 1, " \u5B66\u5E74\u5EA6")
        }, "( ", kParam, " \xD7 ", info.totalPoint, " )"));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, null, " = ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        title: "\u603B\u5206"
      }, this.state.teacherData.score)))))));
    }
  }]);

  return Explain;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explain);

/***/ })

}]);