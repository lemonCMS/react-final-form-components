"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _omitBy2 = _interopRequireDefault(require("lodash/omitBy"));

var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContextBinder =
/*#__PURE__*/
function (_React$Component) {
  function ContextBinder() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: null
    }), _temp) || _assertThisInitialized(_this);
  }

  var _proto = ContextBinder.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;

    if (this.props.input.value && this.props.input.value !== '' && this.props.field.conf && this.props.field.conf.unix) {
      this.setState({
        value: _moment.default.unix(this.props.input.value)
      }, function () {
        _this2.props.input.onChange(_this2.state.value);
      });
    } else {
      this.setState({
        value: (0, _moment.default)(this.props.input.value)
      }, function () {
        _this2.props.input.onChange(_this2.state.value);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    if (this.context.isStatic || this.props.field.static) {
      return _react.default.createElement("div", {
        className: 'rte-readonly',
        dangerouslySetInnerHTML: {
          __html: this.state.value ? this.state.value.format() : ''
        }
      });
    }

    var inputProps = {
      disabled: false
    };

    if (this.props.field && this.props.field.disabled && (0, _isFunction2.default)(this.props.field.disabled)) {
      inputProps.disabled = this.context.checkCondition(this.props.field.disabled);
    }

    var newProps = (0, _omitBy2.default)(this.props.input, ['value', 'onChange', 'onBlur', 'onFocus']);

    newProps.onChange = function (value) {
      _this3.setState({
        value: value
      }, function () {
        _this3.props.input.onChange(value);
      });
    };

    newProps.value = this.state.value;
    return _react.default.createElement(_reactDatetime.default, _extends({}, newProps, {
      inputProps: inputProps
    }, this.props.field.conf));
  };

  _inheritsLoose(ContextBinder, _React$Component);

  return ContextBinder;
}(_react.default.Component);

ContextBinder.propTypes = {
  field: _propTypes.default.object,
  input: _propTypes.default.object
};
ContextBinder.contextTypes = {
  checkCondition: _propTypes.default.func,
  isStatic: _propTypes.default.bool
};

var _default = function _default(_ref) {
  var input = _ref.input,
      field = _ref.field;
  return _react.default.createElement(ContextBinder, {
    input: input,
    field: field
  });
};

exports.default = _default;