"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clone2 = _interopRequireDefault(require("lodash/clone"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _has2 = _interopRequireDefault(require("lodash/has"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _indexOf2 = _interopRequireDefault(require("lodash/indexOf"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Resourcebinder =
/*#__PURE__*/
function (_React$Component) {
  function Resourcebinder() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.openResource = _this.openResource.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeResource = _this.closeResource.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.options = _this.options.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.callBack = _this.callBack.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getList = _this.getList.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      showResource: false,
      list: []
    };
    return _this;
  }

  var _proto = Resourcebinder.prototype;

  _proto.componentWillMount = function componentWillMount() {
    this.getList(this.props);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.getList(nextProps);
  };

  _proto.getList = function getList(props) {
    var field = props.field;
    var list = [];

    if (this.state.list.length === 0) {
      if ((0, _has2.default)(field, 'list')) {
        list = field.list;
      } else if (props.field.children) {
        list = (0, _map2.default)((0, _isArray2.default)(props.field.children) ? props.field.children : [props.field.children], function (option) {
          return {
            value: option.props.value,
            desc: option.props.children
          };
        });
      }
    } else {
      list = this.state.list;
    }

    this.setState({
      list: list
    });
  };

  _proto.options = function options() {
    var _this2 = this;

    var options = [];

    if ((0, _get2.default)(this.props.field, 'multiple', true) === true) {
      options = (0, _map2.default)(this.state.list, function (option, key) {
        if ((0, _indexOf2.default)(_this2.props.input.value, option.value) > -1) {
          return _react.default.createElement("p", {
            className: "form-control-static",
            key: key
          }, (0, _indexOf2.default)(_this2.props.input.value, option.value) > -1 ? _react.default.createElement("i", {
            className: "fa fa-check-square-o"
          }) : _react.default.createElement("i", {
            className: "fa fa-square-o"
          }), ' ', option.desc);
        }
      });
    } else {
      options = (0, _map2.default)(this.state.list, function (option, key) {
        if (String(_this2.props.input.value) === String(option.value)) {
          return _react.default.createElement("p", {
            className: "form-control-static",
            key: key
          }, _react.default.createElement("i", {
            className: "fa fa-check-square-o"
          }), ' ', option.desc);
        }
      });
    }

    return _react.default.createElement("div", {
      className: "checkbox"
    }, options);
  };

  _proto.callBack = function callBack(values, list) {
    var _this3 = this;

    this.setState({
      list: list
    }, function () {
      if ((0, _get2.default)(_this3.props.field, 'multiple', true) === true) {
        _this3.props.input.onChange((0, _uniq2.default)(values));
      } else {
        _this3.props.input.onChange(values);
      }
    });
  };

  _proto.openResource = function openResource() {
    this.setState({
      showResource: true
    });
  };

  _proto.closeResource = function closeResource() {
    this.setState({
      showResource: false
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var disabled = false;

    if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
      disabled = this.context.checkCondition(this.props.field.disabled());
    }

    var button = function button() {
      if (!_this4.props.field.static && !_this4.context.isStatic) {
        return _react.default.createElement("button", {
          type: "button",
          onClick: _this4.openResource,
          disabled: disabled
        }, (0, _get2.default)(_this4.props, 'field.buttonResource', 'open'));
      }
    };

    var clonedValues = function clonedValues() {
      if ((0, _get2.default)(_this4.props.field, 'multiple', true) === true) {
        if ((0, _isEmpty2.default)(_this4.props.input.value)) {
          return [];
        }

        return (0, _clone2.default)(_this4.props.input.value);
      } else {
        return _this4.props.input.value;
      }
    };

    var resourceProps = {
      clonedValues: clonedValues(),
      clonedList: (0, _clone2.default)(this.state.list) || (0, _clone2.default)(this.props.field.list) || [],
      callBack: this.callBack,
      show: this.state.showResource,
      closeResource: this.closeResource,
      multiple: (0, _get2.default)(this.props.field, 'multiple', true),
      name: (0, _get2.default)(this.props.field, 'name')
    };
    return _react.default.createElement("div", null, button(), this.options(), this.props.field.resource(resourceProps));
  };

  _inheritsLoose(Resourcebinder, _React$Component);

  return Resourcebinder;
}(_react.default.Component);

Resourcebinder.propTypes = {
  field: _propTypes.default.object,
  input: _propTypes.default.object,
  mango: _propTypes.default.object
};
Resourcebinder.contextTypes = {
  checkCondition: _propTypes.default.func,
  isStatic: _propTypes.default.bool
};

var _default = function _default(_ref) {
  var input = _ref.input,
      field = _ref.field;
  return _react.default.createElement(Resourcebinder, {
    input: input,
    field: field
  });
};

exports.default = _default;