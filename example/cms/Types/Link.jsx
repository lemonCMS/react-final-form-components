import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../../src/Bs/Input';
import Complex from '../../../src/Bs/Complex';

class Link extends Component {
  render() {
    const size = {
      labelSize: {md: 3},
      fieldSize: {md: 9}
    };

    return (
      <Complex
        name={this.props.item.id}
        label={this.props.item.name}
        type={'complex'}
        mandatory
        render={name => (
          <div>
            <Input type="text" label={'href'} name={`${name}.href`} placeholder={'https://'} {...size} />
            <Input type="text" label={'title'} name={`${name}.title`} placeholder={'title'} {...size} />
            <Input type="text" label={'text'} name={`${name}.text`} placeholder={'text'} {...size} />
          </div>
        )}
      />
    );
  }
}

Link.propTypes = {
  item: PropTypes.object
};
Link.defaultProps = {};

export default Link;
