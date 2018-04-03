import React from 'react';
import PropTypes from 'prop-types';
import _clone from 'lodash/clone';
import _isFunction from 'lodash/isFunction';
import _has from 'lodash/has';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _indexOf from 'lodash/indexOf';
import _isArray from 'lodash/isArray';
import _uniq from 'lodash/uniq';

class Resourcebinder extends React.Component {

  constructor() {
    super();
    this.openResource = this.openResource.bind(this);
    this.closeResource = this.closeResource.bind(this);
    this.options = this.options.bind(this);
    this.callBack = this.callBack.bind(this);
    this.getList = this.getList.bind(this);
    this.state = {
      showResource: false,
      list: []
    };
  }

  componentWillMount() {
    this.getList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getList(nextProps);
  }

  getList(props) {
    const {field} = props;
    let list = [];
    if (this.state.list.length === 0) {
      if (_has(field, 'list')) {
        list = field.list;
      } else if (props.field.children) {

        list = _map(_isArray(props.field.children) ? props.field.children : [props.field.children], (option) => {
          return ({value: option.props.value, desc: option.props.children});
        });
      }
    } else {
      list = this.state.list;
    }

    this.setState({list: list});
  }

  options() {
    let options = [];
    if (_get(this.props.field, 'multiple', true) === true) {
      options = _map(this.state.list, (option, key) => {
        if (_indexOf(this.props.input.value, option.value) > -1) {
          return (
            <p className="form-control-static" key={key}>
              {_indexOf(this.props.input.value, option.value) > -1 ? <i className="fa fa-check-square-o" /> : <i className="fa fa-square-o" />}
              {' '}
              {option.desc}
            </p>
          );
        }
      });
    } else {
      options = _map(this.state.list, (option, key) => {
        if (String(this.props.input.value) === String(option.value)) {
          return (
            <p className="form-control-static" key={key}>
              <i className="fa fa-check-square-o" />
              {' '}
              {option.desc}
            </p>
          );
        }
      });
    }

    return (
      <div className="checkbox">
        {options}
      </div>
    );
  }

  callBack(values, list) {
    this.setState({
      list: list
    }, () => {

      if (_get(this.props.field, 'multiple', true) === true) {
        this.props.input.onChange(_uniq(values));
      } else {
        this.props.input.onChange(values);
      }

    });
  }

  openResource() {
    this.setState({showResource: true});
  }

  closeResource() {
    this.setState({showResource: false});
  }

  render() {
    let disabled = false;
    if (this.props.field && this.props.field.disabled && _isFunction(this.props.field.disabled)) {
      disabled = this.context.checkCondition(this.props.field.disabled());
    }

    const button = () => {
      if (!this.props.field.static && !this.context.isStatic) {
        return (<button type='button' onClick={this.openResource}
          disabled={disabled}>{_get(this.props, 'field.buttonResource', 'open')}</button>);
      }
    };

    const clonedValues = () => {
      if (_get(this.props.field, 'multiple', true) === true) {
        if (_isEmpty(this.props.input.value)) {
          return [];
        }
        return _clone(this.props.input.value);
      } else {
        return this.props.input.value;
      }
    };

    const resourceProps = {
      clonedValues: clonedValues(),
      clonedList: _clone(this.state.list) || _clone(this.props.field.list) || [],
      callBack: this.callBack,
      show: this.state.showResource,
      closeResource: this.closeResource,
      multiple: _get(this.props.field, 'multiple', true),
      name: _get(this.props.field, 'name')
    };

    return (
      <div>
        {button()}
        {this.options()}
        {this.props.field.resource(resourceProps)}
      </div>
    );
  }
}

Resourcebinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
  mango: PropTypes.object,
};

Resourcebinder.contextTypes = {
  checkCondition: PropTypes.func,
  isStatic: PropTypes.bool
};
export default ({input, field}) => (<Resourcebinder
  input={input}
  field={field} />);

