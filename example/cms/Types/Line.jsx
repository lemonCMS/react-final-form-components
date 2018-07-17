import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../../src/Bs/Input';

class Line extends Component {
  render() {
    return (
      <Input type="text" name={this.props.item.id} />
    );
  }
}

Line.propTypes = {
  item: PropTypes.object
};
Line.defaultProps = {};

export default Line;
