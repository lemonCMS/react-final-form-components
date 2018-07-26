"use strict";

exports.__esModule = true;
exports.default = void 0;

var _finalFormArrays = _interopRequireDefault(require("final-form-arrays"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var onSubmit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(values) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.warn('Implement onSubmit handler');
            console.warn(values);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var ContextWrapper =
/*#__PURE__*/
function (_React$Component) {
  function ContextWrapper(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.checkCondition = _this.checkCondition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getStatus = _this.getStatus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.values = {};
    return _this;
  }

  var _proto = ContextWrapper.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      checkCondition: this.checkCondition,
      isStatic: this.props.static,
      debug: this.props.debug,
      status: this.getStatus()
    };
  };

  _proto.getStatus = function getStatus() {
    var _this$props = this.props,
        dirty = _this$props.dirty,
        dirtySinceLastSubmit = _this$props.dirtySinceLastSubmit,
        error = _this$props.error,
        errors = _this$props.errors,
        invalid = _this$props.invalid,
        pristine = _this$props.pristine,
        submitError = _this$props.submitError,
        submitErrors = _this$props.submitErrors,
        submitFailed = _this$props.submitFailed,
        submitSucceeded = _this$props.submitSucceeded,
        submitting = _this$props.submitting,
        valid = _this$props.valid,
        validating = _this$props.validating;
    return {
      dirty: dirty,
      dirtySinceLastSubmit: dirtySinceLastSubmit,
      error: error,
      errors: errors,
      invalid: invalid,
      pristine: pristine,
      submitError: submitError,
      submitErrors: submitErrors,
      submitFailed: submitFailed,
      submitSucceeded: submitSucceeded,
      submitting: submitting,
      valid: valid,
      validating: validating
    };
  };

  _proto.checkCondition = function checkCondition(args) {
    return args(this.props.values);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.props.debug) {
      return _react.default.createElement("div", null, this.props.children, _react.default.createElement(_reactFinalForm.FormSpy, {
        subscription: {
          values: true
        }
      }, function (_ref2) {
        var values = _ref2.values;

        if (_this2.props.listen && (0, _isFunction2.default)(_this2.props.listen)) {
          _this2.props.listen(values);
        }

        return _react.default.createElement("pre", null, JSON.stringify(values, 0, 2));
      }));
    }

    return _react.default.createElement(_react.default.Fragment, null, this.props.children, this.props.listen && (0, _isFunction2.default)(this.props.listen) && _react.default.createElement(_reactFinalForm.FormSpy, {
      subscription: {
        values: true
      },
      onChange: function onChange(props) {
        _this2.props.listen(props.values);
      }
    }));
  };

  _inheritsLoose(ContextWrapper, _React$Component);

  return ContextWrapper;
}(_react.default.Component);

_defineProperty(ContextWrapper, "childContextTypes", {
  checkCondition: _propTypes.default.func.isRequired,
  isStatic: _propTypes.default.bool.isRequired,
  debug: _propTypes.default.bool.isRequired,
  status: _propTypes.default.object.isRequired
});

ContextWrapper.propTypes = {
  children: _propTypes.default.object,
  'static': _propTypes.default.bool,
  values: _propTypes.default.object,
  debug: _propTypes.default.bool,
  dirty: _propTypes.default.bool,
  dirtySinceLastSubmit: _propTypes.default.bool,
  errors: _propTypes.default.object,
  error: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  pristine: _propTypes.default.bool,
  submitError: _propTypes.default.bool,
  submitErrors: _propTypes.default.object,
  submitFailed: _propTypes.default.bool,
  submitSucceeded: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  validating: _propTypes.default.bool,
  listen: _propTypes.default.func
};
ContextWrapper.defaultProps = {
  'static': false,
  debug: false
};

var FormObj =
/*#__PURE__*/
function (_React$Component2) {
  function FormObj() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = FormObj.prototype;

  _proto2.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    switch (typeof this.props.shouldComponentUpdate) {
      case 'undefined':
        return false;

      case 'function':
        return this.props.shouldComponentUpdate();

      default:
        return this.props.shouldComponentUpdate !== nextProps.shouldComponentUpdate;
    }
  };

  _proto2.render = function render() {
    var _this3 = this;

    return _react.default.createElement(_reactFinalForm.Form, {
      keepDirtyOnReinitialize: this.props.keepDirtyOnReinitialize,
      onSubmit: this.props.onSubmit || onSubmit,
      subscription: this.props.subscription,
      validate: this.props.validate || function () {
        return {};
      },
      initialValues: this.props.initialValues || {},
      mutators: _objectSpread({}, _finalFormArrays.default),
      render: function render(_ref3) {
        var handleSubmit = _ref3.handleSubmit,
            rest = _objectWithoutProperties(_ref3, ["handleSubmit"]);

        return _react.default.createElement(ContextWrapper, _extends({}, (0, _omit2.default)(_this3.props, ['onSubmit', 'validate', 'initialValues', 'subscription', 'shouldComponentUpdate']), rest), _react.default.createElement("form", {
          onSubmit: handleSubmit,
          className: _this3.props.className
        }, _this3.props.children));
      }
    });
  };

  _inheritsLoose(FormObj, _React$Component2);

  return FormObj;
}(_react.default.Component);

FormObj.propTypes = {
  keepDirtyOnReinitialize: _propTypes.default.bool,
  initialValues: _propTypes.default.object,
  subscription: _propTypes.default.object,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  onSubmit: _propTypes.default.func,
  validate: _propTypes.default.func,
  className: _propTypes.default.string,
  shouldComponentUpdate: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool, _propTypes.default.string]),
  listen: _propTypes.default.func,
  debug: _propTypes.default.bool
};
FormObj.defaultProps = {
  debug: false,
  keepDirtyOnReinitialize: false
};
var _default = FormObj;
exports.default = _default;