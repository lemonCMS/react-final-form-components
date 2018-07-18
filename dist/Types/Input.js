"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _Input = _interopRequireDefault(require("../Components/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

var Input =
/*#__PURE__*/
function (_React$Component) {
  function Input() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Input.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        rest = _objectWithoutProperties(_this$props, ["name"]);

    return _react.default.createElement(_reactFinalForm.Field, {
      component: _Input.default,
      name: name,
      field: rest
    });
  };

  _inheritsLoose(Input, _React$Component);

  return Input;
}(_react.default.Component);

Input.propTypes = {
  type: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
Input.contextTypes = {
  getProp: _propTypes.default.func
};
Input.defaultProps = {};
var _default = Input;
exports.default = _default;