(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/components/ScoreList.js":
/*!**********************************************!*\
  !*** ./resources/js/components/ScoreList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddForm */ "./resources/js/components/AddForm.js");
/* harmony import */ var _EditForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditForm */ "./resources/js/components/EditForm.js");
/* harmony import */ var _Explain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Explain */ "./resources/js/components/Explain.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper */ "./resources/js/helper.js");
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





var Text = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Text,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Paragraph;






var base = '/admin/points';

var ScoreList = /*#__PURE__*/function (_React$Component) {
  _inherits(ScoreList, _React$Component);

  var _super = _createSuper(ScoreList);

  function ScoreList(props) {
    var _this;

    _classCallCheck(this, ScoreList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.editFormRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableChange", function (pagination, filters) {
      console.log(pagination);

      _this.fetch({
        pagination: pagination,
        filters: filters,
        year: _this.state.yearMoment.year(),
        force: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: [],
      pagination: {
        current: 1,
        pageSize: 5,
        showSizeChanger: true,
        disabled: false
      },
      loading: false,
      showDrawer: false,
      showEditDrawer: false,
      filters: {},
      initVal: {},
      yearMoment: moment__WEBPACK_IMPORTED_MODULE_7___default()(),
      excelLoading: false,
      showExplain: false,
      explainID: null
    });

    _defineProperty(_assertThisInitialized(_this), "stateBackup", null);

    _defineProperty(_assertThisInitialized(_this), "fetch", function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_this.stateBackup) {
        // 重新请求时恢复分页
        _this.setState(_this.stateBackup);

        params.pagination = _this.stateBackup.pagination;

        if (!params.force) {
          // 当刷新时恢复过滤(切换过滤选项时不恢复)
          params.filters = _this.stateBackup.filters;
        }

        _this.stateBackup = null;
      }

      _this.setState({
        loading: true
      });

      reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
        url: '/api/1.0/results' + '?pageSize=' + params.pagination.pageSize + '&page=' + params.pagination.current + '&year=' + params.year,
        data: _objectSpread({}, params.filters),
        method: 'get',
        type: 'json'
      }).then(function (data) {
        console.log(data);

        _this.setState({
          loading: false,
          data: data.data,
          pagination: _objectSpread(_objectSpread({}, params.pagination), {}, {
            total: data.total
          }),
          filters: params.filters
        });
      });
    });

    return _this;
  }

  _createClass(ScoreList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pagination = this.state.pagination;
      this.fetch({
        pagination: pagination,
        year: moment__WEBPACK_IMPORTED_MODULE_7___default()().year(),
        filters: {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          pagination = _this$state.pagination,
          loading = _this$state.loading;
      var columns = [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null), " \u59D3\u540D"),
        dataIndex: 'name',
        fixed: 'left',
        width: 80
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["IdcardOutlined"], null), " \u8EAB\u4EFD\u8BC1"),
        dataIndex: 'IDNum',
        render: function render(value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, "...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              fontFamily: 'Consolas'
            }
          }, value.slice(-3)));
        },
        width: 100
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ApartmentOutlined"], null), " \u5C97\u4F4D"),
        dataIndex: 'group',
        ellipsis: {
          showTitle: false
        },
        filters: [{
          text: '领导',
          value: '1'
        }, {
          text: '考试学科任课教师',
          value: '2'
        }, {
          text: '非考试学科任课教师',
          value: '3'
        }, {
          text: '教辅',
          value: '4'
        }],
        render: function render(value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
            placement: "topLeft",
            title: ['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][value]
          }, ['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][value]);
        },
        filteredValue: this.state.filters.group || null
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StockOutlined"], null), " \u804C\u7EA7"),
        dataIndex: 'rank',
        filters: [{
          text: '初级教师',
          value: '1'
        }, {
          text: '二级教师',
          value: '2'
        }, {
          text: '一级教师',
          value: '3'
        }, {
          text: '高级教师',
          value: '4'
        }, {
          text: '正高级教师',
          value: '5'
        }],
        render: function render(value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
            color: ['', 'green', 'orange', 'red', 'purple', 'geekblue'][value]
          }, ['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][value]);
        },
        filteredValue: this.state.filters.rank || null
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u72B6\u6001"),
        dataIndex: 'inPenalty',
        render: function render(value) {
          return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "error",
            text: "\u6682\u4E0D\u53EF\u664B\u5347"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "success",
            text: "\u6B63\u5E38"
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u5206\u6570"),
        dataIndex: 'score',
        fixed: 'right',
        width: 130,
        render: function render(value, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: function onClick() {
              _this2.setState({
                showExplain: true,
                explainID: record.id
              });
            }
          }, value, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EyeOutlined"], null)));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
        direction: "vertical",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
        direction: 'horizontal'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
        picker: 'year',
        style: {
          width: 80
        },
        defaultValue: moment__WEBPACK_IMPORTED_MODULE_7___default()(),
        allowClear: false,
        onChange: function onChange(val) {
          _this2.setState({
            yearMoment: val
          });

          var pagination = _this2.state.pagination;

          _this2.fetch({
            pagination: pagination,
            year: val.year(),
            filters: _this2.state.filters
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: 'primary',
        onClick: function onClick() {
          antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm({
            title: '确定要重新计算 ' + _this2.state.yearMoment.year() + ' 年的数据吗？',
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ExclamationCircleOutlined"], null),
            content: '使用最新数据计算分数，旧的计算结果将被删除。',
            onOk: function onOk() {
              return reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
                url: '/api/1.0/score/year/' + _this2.state.yearMoment.year(),
                type: 'json',
                method: 'post'
              }).then(function () {
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('计算成功！');
                var pagination = _this2.state.pagination;

                _this2.fetch({
                  pagination: pagination,
                  year: _this2.state.yearMoment.year(),
                  filters: _this2.state.filters
                });
              }, function (err) {
                Object(_helper__WEBPACK_IMPORTED_MODULE_9__["handleErr"])(err);
              });
            },
            onCancel: function onCancel() {}
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CalculatorOutlined"], null), " \u91CD\u65B0\u8BA1\u7B97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownloadOutlined"], null),
        loading: this.state.excelLoading,
        onClick: function onClick() {
          _this2.setState({
            excelLoading: true
          });

          fetch("/download/" + _this2.state.yearMoment.year()).then(function (res) {
            return res.blob();
          }).then(function (blob) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = _this2.state.yearMoment.year() + '年度教师评级成绩表 ' + moment__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYY-MM-DD') + '.xlsx';
            a.click();
            window.URL.revokeObjectURL(url);

            _this2.setState({
              excelLoading: false
            });
          });
        }
      }, " \u4E0B\u8F7D Excel \u8868\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        type: 'vertical'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
        style: {
          whiteSpace: 'normal',
          margin: 0
        },
        ellipsis: {
          rows: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ExclamationCircleOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        placement: "left",
        title: "\u5C06 ".concat(this.state.yearMoment.year() - 1, " - ").concat(this.state.yearMoment.year(), " \u5B66\u5E74\u5EA6\u53CA\u66F4\u65E9\u7684\u6570\u636E\u7EB3\u5165\u8BA1\u7B97\u3002")
      }, " \u5C06 ".concat(this.state.yearMoment.year() - 1, " - ").concat(this.state.yearMoment.year(), " \u5B66\u5E74\u5EA6\u53CA\u66F4\u65E9\u7684\u6570\u636E\u7EB3\u5165\u8BA1\u7B97\u3002")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
        direction: 'horizontal'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
        placeholder: "\u641C\u7D22\u59D3\u540D",
        onSearch: function onSearch(value) {
          _this2.setState({
            loading: true
          });

          reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
            url: '/api/1.0/results',
            data: {
              year: _this2.state.yearMoment.year(),
              query: value
            },
            method: 'get',
            type: 'json'
          }).then(function (data) {
            //console.log(data)
            if (!_this2.stateBackup) {
              _this2.stateBackup = {
                pagination: _objectSpread(_objectSpread({}, _this2.state.pagination), {}, {
                  current: 1
                }),
                //current:1 防止筛选后看不到数据
                filters: _this2.state.filters
              };
            }

            _this2.setState({
              loading: false,
              data: data,
              pagination: _objectSpread(_objectSpread({}, _this2.state.pagination), {}, {
                total: data.length,
                current: 1,
                pageSize: data.length,
                disabled: true
              }),
              filters: []
            });
          }, function (err) {
            _this2.setState({
              loading: false
            });

            Object(_helper__WEBPACK_IMPORTED_MODULE_9__["handleErr"])(err);
          });
        },
        style: {
          width: 200
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          _this2.fetch({
            pagination: _this2.state.pagination,
            filters: _this2.state.filters,
            year: _this2.state.yearMoment.year()
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SyncOutlined"], {
        spin: this.state.loading
      }), " \u5237\u65B0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        scroll: {
          x: 600
        },
        style: {
          width: '100%'
        },
        columns: columns,
        rowKey: function rowKey(record) {
          return record.id;
        },
        dataSource: data,
        pagination: this.state.pagination,
        loading: loading,
        onChange: this.handleTableChange,
        locale: {
          emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
            image: antd__WEBPACK_IMPORTED_MODULE_3__["Empty"].PRESENTED_IMAGE_SIMPLE,
            description: '没有数据，请点击上方按钮计算。'
          })
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        visible: this.state.showExplain,
        onCancel: function onCancel() {
          _this2.setState({
            showExplain: false
          });
        },
        closable: false,
        footer: null,
        width: 700,
        destroyOnClose: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Explain__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClose: function onClose() {
          _this2.setState({
            showExplain: false
          });
        },
        resultID: this.state.explainID
      })));
    }
  }]);

  return ScoreList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ScoreList);

/***/ })

}]);