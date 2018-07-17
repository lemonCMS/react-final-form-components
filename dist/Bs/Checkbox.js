"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Wrap = _interopRequireDefault(require("./Wrappers/Wrap"));

var _Checkbox = _interopRequireDefault(require("../Components/Checkbox"));

var _decorator = _interopRequireDefault(require("../utils/decorator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _decorator.default)({
  type: 'text',
  component: _Checkbox.default
})(_Wrap.default);

exports.default = _default;