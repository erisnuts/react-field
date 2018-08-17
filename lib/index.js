'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactDom = require('react-dom');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createReactClass2.default)({

  displayName: 'Field',

  propTypes: {
    type: _propTypes2.default.string,
    stopChangePropagation: _propTypes2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      stopChangePropagation: true,
      type: 'text'
    };
  },
  render: function render() {
    var onChange = null;

    if (typeof this.props.onChange === 'function') {
      //only pass our onChange if the user provided one
      //so the React warning is still displayed if the user didn't provide onChange
      //but provided value
      onChange = this.onChange;
    }

    var inputProps = (0, _objectAssign2.default)({}, this.props);

    delete inputProps.stopChangePropagation;

    return _react2.default.createElement('input', _extends({}, inputProps, { onChange: onChange, ref: 'input' }));
  },
  focus: function focus() {
    (0, _reactDom.findDOMNode)(this.refs.input).focus();
  },
  onChange: function onChange(event) {
    if (this.props.stopChangePropagation) {
      event.stopPropagation();
    }

    this.props.onChange(event.target.value, event);
  }
});