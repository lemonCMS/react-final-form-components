"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-style: normal;\n  text-align: center;\n  height: ", "px;\n  width: ", "px;\n  line-height: ", "px;\n  border-radius: ", "px;\n  border: 1px solid #ddd;\n  background: #eee;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RenderCount =
/*#__PURE__*/
function (_React$Component) {
  function RenderCount() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renders", 0), _temp) || _assertThisInitialized(_this);
  }

  var _proto = RenderCount.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Circle, null, ++this.renders);
  };

  _inheritsLoose(RenderCount, _React$Component);

  return RenderCount;
}(_react.default.Component);

exports.default = RenderCount;
var size = 30;

var Circle = _styledComponents.default.i(_templateObject(), size, size, size, size / 2);