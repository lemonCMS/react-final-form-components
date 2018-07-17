"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TinyMceInput = _interopRequireDefault(require("./TinyMceInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

var ContextBinder =
/*#__PURE__*/
function (_React$Component) {
  function ContextBinder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ContextBinder.prototype;

  _proto.render = function render() {
    if (this.context.isStatic || this.props.field.static) {
      return _react.default.createElement("div", {
        className: 'rte-readonly',
        dangerouslySetInnerHTML: {
          __html: this.props.input.value
        }
      });
    }

    return _react.default.createElement(_TinyMceInput.default, _extends({
      readOnly: true
    }, this.props.input, {
      className: this.props.field.className,
      tinymceConfig: Object.assign({}, this.props.field.config)
    }));
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