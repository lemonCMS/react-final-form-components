import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import _isFunction from 'lodash/isFunction';

export default class Message extends Component {

  static contextTypes = {
    checkCondition: PropTypes.func,
    status: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
  };

  render() {
    const {submitting, valid, submitFailed, submitSucceeded} = this.context.status;

    if (this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.context.checkCondition(this.props.hidden) === true) {
        return;
      }
    } else if (this.props.show && _isFunction(this.props.show)) {
      if (this.context.checkCondition(this.props.show) !== true) {
        return null;
      }
    }

    if (this.props.type === 'success' && !submitting) {
      if (valid === true && submitSucceeded === true && submitting === false) {
        return (<Alert bsStyle="success">{this.props.children}</Alert>);
      }
    }

    if (this.props.type === 'error' && !submitting) {
      if (valid === false && submitFailed === true) {
        return (<Alert bsStyle="danger">{this.props.children}</Alert>);
      }
    }

    return <span />;
  }

}
