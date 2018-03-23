import React, {Component} from 'react';
import BSButton from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

class Button extends Component {
  render() {
    const {children, ...rest} = this.props;
    return (
      <BSButton {...rest} disabled={this.context.status.submitting || !this.context.status.valid  || this.context.status.pristine}>
        {children}
        {this.props.type === 'submit' && this.context.status.submitting && ' '}
        {this.props.type === 'submit' && this.context.status.submitting && <i className="fa fa-circle-o-notch fa-spin" />}
      </BSButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  type: PropTypes.string
};
Button.defaultProps = {};
Button.contextTypes = {
  status: PropTypes.object
};
export default hot(module)(Button);
