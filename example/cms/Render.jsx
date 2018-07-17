import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {SortableElement} from 'react-sortable-hoc';
import Line from './Types/Line';
import Link from './Types/Link';

class Render extends Component {
  constructor() {
    super();
    this.components = this.components.bind(this);
  }

  components() {
    return this.props.types.map((item, key) => {
      switch (item.type) {
        default:
        case 'line':
          return (<Line key={key} item={{...item, key}} />);
        case 'link':
          return (<Link key={key} item={{...item, key}} />);
      }
    });
  }

  render() {
    return (
      <div>
        {this.components()}
      </div>
    );
  }
}

Render.propTypes = {
  types: PropTypes.array.isRequired
};
Render.defaultProps = {};

export default Render;
