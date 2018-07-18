"use strict";

exports.__esModule = true;
exports.default = connnectToConfirm;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function connnectToConfirm(conf) {
  return function (WrappedComponent) {
    var TmpComponent =
    /*#__PURE__*/
    function (_Component) {
      function TmpComponent() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = TmpComponent.prototype;

      _proto.render = function render() {
        return _react.default.createElement(WrappedComponent, _extends({}, this.props, conf));
      };

      _inheritsLoose(TmpComponent, _Component);

      return TmpComponent;
    }(_react.Component);

    return TmpComponent;
  };
}