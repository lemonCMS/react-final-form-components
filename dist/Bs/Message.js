"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Alert = _interopRequireDefault(require("react-bootstrap/lib/Alert"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Message =
/*#__PURE__*/
function (_Component) {
  function Message() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Message.prototype;

  _proto.render = function render() {
    var _this$context$status = this.context.status,
        submitting = _this$context$status.submitting,
        valid = _this$context$status.valid,
        submitFailed = _this$context$status.submitFailed,
        submitSucceeded = _this$context$status.submitSucceeded;

    if (this.props.hidden && (0, _isFunction2.default)(this.props.hidden)) {
      if (this.context.checkCondition(this.props.hidden) === true) {
        return;
      }
    } else if (this.props.show && (0, _isFunction2.default)(this.props.show)) {
      if (this.context.checkCondition(this.props.show) !== true) {
        return null;
      }
    }

    if (this.props.type === 'success' && !submitting) {
      if (valid === true && submitSucceeded === true && submitting === false) {
        return _react.default.createElement(_Alert.default, {
          bsStyle: "success"
        }, this.props.children);
      }
    }

    if (this.props.type === 'error' && !submitting) {
      if (valid === false && submitFailed === true) {
        return _react.default.createElement(_Alert.default, {
          bsStyle: "danger"
        }, this.props.children);
      }
    }

    return _react.default.createElement("span", null);
  };

  _inheritsLoose(Message, _Component);

  return Message;
}(_react.Component);

exports.default = Message;

_defineProperty(Message, "contextTypes", {
  checkCondition: _propTypes.default.func,
  status: _propTypes.default.object
});

_defineProperty(Message, "propTypes", {
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string])
});