(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/components/TeacherList.js":
/*!************************************************!*\
  !*** ./resources/js/components/TeacherList.js ***!
  \************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper */ "./resources/js/helper.js");
/* harmony import */ var hashids__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hashids */ "./node_modules/hashids/esm/index.js");
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





var Paragraph = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Text;






var hashids = new hashids__WEBPACK_IMPORTED_MODULE_9__["default"]('qiaosong', 8);
var base = '/admin/points';

var TeacherList = /*#__PURE__*/function (_React$Component) {
  _inherits(TeacherList, _React$Component);

  var _super = _createSuper(TeacherList);

  function TeacherList(props) {
    var _this;

    _classCallCheck(this, TeacherList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.editFormRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableChange", function (pagination, filters) {
      console.log(pagination);

      _this.fetch({
        pagination: pagination,
        filters: filters,
        force: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stateBackup", null);

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
      initVal: {}
    });

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

      console.log(params.filters);

      _this.setState({
        loading: true
      });

      reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
        url: '/api/1.0/teachers' + '?pageSize=' + params.pagination.pageSize + '&page=' + params.pagination.current,
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
      }, function (err) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_8__["handleErr"])(err);

        _this.setState({
          loading: false
        });
      });
    });

    return _this;
  }

  _createClass(TeacherList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pagination = this.state.pagination;
      this.fetch({
        pagination: pagination,
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
            copyable: {
              text: value
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
            placement: "topLeft",
            title: value
          }, "...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              fontFamily: 'Consolas'
            }
          }, value.slice(-3))));
        },
        width: 90
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ApartmentOutlined"], null), " \u5C97\u4F4D"),
        width: 110,
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
        width: 100,
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
          }, ['', '初级', '二级', '一级', '高级', '正高级'][value]);
        },
        filteredValue: this.state.filters.rank || null
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u6570\u636E"),
        width: 80,
        dataIndex: 'metaData',
        render: function render(value) {
          return value.err ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
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
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "error",
            text: "\u7F3A\u5931"
          })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "success",
            text: "\u5B8C\u6574"
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u8D26\u53F7"),
        dataIndex: 'user_id',
        width: 100,
        render: function render(value) {
          return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "success",
            text: "\u5DF2\u7ED1\u5B9A"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            status: "error",
            text: "\u672A\u7ED1\u5B9A"
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ToolOutlined"], null), " \u64CD\u4F5C"),
        dataIndex: 'id',
        width: 280,
        fixed: 'right',
        render: function render(value) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
            title: "\u6B64\u6559\u5E08\u6240\u6709\u7684\u5F97\u5206\u8BB0\u5F55\u4E5F\u5C06\u968F\u4E4B\u88AB\u5220\u9664\uFF0C\u771F\u7684\u8981\u5220\u9664\u8FD9\u6761\u8BB0\u5F55\u5417\uFF1F",
            onConfirm: function onConfirm() {
              var hide = antd__WEBPACK_IMPORTED_MODULE_3__["message"].loading('删除中...', 0);
              console.log(value);
              reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
                url: '/api/1.0/teachers/' + value,
                method: 'post',
                data: {
                  _method: 'delete'
                }
              }).then(function () {
                hide();
                setTimeout(function () {
                  antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('已删除。');
                }, 500);

                _this2.fetch({
                  pagination: _this2.state.pagination,
                  filters: _this2.state.filters
                });
              }, function (err) {
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(JSON.parse(err.response).message);
              });
            },
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            danger: true
          }, "\u5220\u9664")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: function onClick() {
              var remove = antd__WEBPACK_IMPORTED_MODULE_3__["message"].loading('正在加载教师详细信息');
              reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
                url: '/api/1.0/teachers/' + value
              }).then(function (data) {
                data.fromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()(data.fromYear, 'YYYY');

                _this2.setState({
                  initVal: data,
                  showEditDrawer: true,
                  editID: value
                });

                console.log(_this2.state.initVal);
                remove();
              });

              _this2.editFormRef.handleRefresh();
            }
          }, "\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: "".concat(base, "/").concat(hashids.encode(value))
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutlined"], null), " \u4FEE\u6539\u5206\u6570"))));
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        visible: this.state.showDrawer,
        onClose: function onClose() {
          _this2.setState({
            showDrawer: false
          });
        },
        refresh: function refresh() {
          _this2.fetch({
            pagination: _this2.state.pagination,
            filters: _this2.state.filters,
            force: true
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        visible: this.state.showEditDrawer,
        onClose: function onClose() {
          _this2.setState({
            showEditDrawer: false
          });
        },
        editID: this.state.editID,
        refresh: function refresh() {
          _this2.fetch({
            pagination: _this2.state.pagination,
            filters: _this2.state.filters
          });
        },
        initVal: this.state.initVal,
        onRef: this.onRef
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
        direction: "vertical",
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
        direction: 'horizontal'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
        placeholder: "\u641C\u7D22\u59D3\u540D\u6216\u8EAB\u4EFD\u8BC1\u53F7",
        onSearch: function onSearch(value) {
          _this2.setState({
            loading: true
          });

          reqwest__WEBPACK_IMPORTED_MODULE_1___default()({
            url: '/api/1.0/teachers?query=' + value,
            method: 'get',
            type: 'json'
          }).then(function (data) {
            console.log(data);

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
              filters: {}
            });
          }, function (err) {
            _this2.setState({
              loading: false
            });

            Object(_helper__WEBPACK_IMPORTED_MODULE_8__["handleErr"])(err);
          });
        },
        style: {
          width: 200
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], null),
        onClick: function onClick() {
          _this2.setState({
            showDrawer: true
          });
        }
      }, "\u65B0\u589E\u6559\u5E08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "text",
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          _this2.fetch({
            pagination: _this2.state.pagination,
            filters: _this2.state.filters
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SyncOutlined"], {
        spin: this.state.loading
      }), " \u5237\u65B0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        style: {
          width: '100%'
        },
        scroll: {
          x: 1000
        },
        columns: columns,
        rowKey: function rowKey(record) {
          return record.id;
        },
        dataSource: data,
        pagination: pagination,
        loading: loading,
        onChange: this.handleTableChange
      })));
    }
  }]);

  return TeacherList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TeacherList);

/***/ })

}]);