import React from 'react';
import PropTypes from 'prop-types';
import _isFunction from 'lodash/isFunction';
import _omitBy from 'lodash/omitBy';
import ReactDateTime from 'react-datetime';
import moment from 'moment';

class ContextBinder extends React.Component {

  state = {
    value: ''
  };

  componentWillMount() {
    if (this.props.input.value && this.props.input.value !== '' && this.props.field.conf && this.props.field.conf.unix) {
      this.setState({value: moment.unix(this.props.input.value)}, () => {
        this.props.input.onChange(this.state.value);
      });
    } else {
      this.setState({
        value: moment(this.props.input.value)
      }, () => {
        this.props.input.onChange(this.state.value);
      });
    }
  }

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

    const newProps = _omitBy(this.props.input, ['value', 'onChange', 'onBlur', 'onFocus']);
    newProps.onChange = (value) => {
      this.setState({value: value}, () => {
        this.props.input.onChange(value);
      });
    };
    newProps.value = this.state.value;

    return (
      <ReactDateTime {...newProps} inputProps={inputProps} {...this.props.field.conf} />
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
