import React from 'react';
import PropTypes from 'prop-types';
import _isFunction from 'lodash/isFunction';
import ReactDateTime from 'react-datetime';

class ContextBinder extends React.Component {

  render() {
    if (this.context.isStatic || this.props.field.static) {
      return (
        <div className={'rte-readonly'} dangerouslySetInnerHTML={{__html: this.props.input.value}} />
      );
    }


    const inputProps = {
      disabled: false
    };
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      inputProps.disabled = this.context.checkCondition(this.props.field.disabled);
    }

    return (
      <ReactDateTime {...this.props.input} inputProps={inputProps} {...this.props.field.conf} />
    );
  }
}

ContextBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

ContextBinder.contextTypes = {
  checkCondition: PropTypes.func,
  isStatic: PropTypes.bool
};

export default ({input, field}) => {
  return (
    <ContextBinder input={input} field={field} />
  );
};
