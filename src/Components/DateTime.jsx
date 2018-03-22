import React from 'react';
import PropTypes from 'prop-types';
import ReactDateTime from 'react-datetime';

class ContextBinder extends React.Component {

  render() {
    console.log(this.props);
    if (this.context.isStatic || this.props.field.static) {
      return (
        <div className={'rte-readonly'} dangerouslySetInnerHTML={{__html: this.props.input.value}} />
      );
    }

    return (
      <ReactDateTime {...this.props.input} {...this.props.field} />
    );
  }
}

ContextBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

ContextBinder.contextTypes = {
  checkHidden: PropTypes.func,
  checkShow: PropTypes.func,
  isStatic: PropTypes.bool
};

export default ({input, field}) => {
  return (
    <ContextBinder input={input} field={field} />
  );
};
