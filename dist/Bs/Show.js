"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

var Show =
/*#__PURE__*/
function (_React$Component) {
  function Show() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Show.prototype;

  _proto.render = function render() {
    if (this.props.hidden && (0, _isFunction2.default)(this.props.hidden)) {
      if (this.context.checkCondition(this.props.hidden, (0, _get2.default)(this.props, 'parent')) === true) {
        return null;
      }
    } else if (this.props.show && (0, _isFunction2.default)(this.props.show)) {
      if (this.context.checkCondition(this.props.show, (0, _get2.default)(this.props, 'parent')) !== true) {
        return null;
      }
    }

    return this.props.children;
  };

  _inheritsLoose(Show, _React$Component);

  return Show;
}(_react.default.Component);

Show.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]).isRequired,
  hidden: _propTypes.default.func,
  show: _propTypes.default.func
};
Show.defaultProps = {};
Show.contextTypes = {
  checkCondition: _propTypes.default.func.isRequired,
  isStatic: _propTypes.default.bool.isRequired
};
var _default = Show;
exports.default = _default;