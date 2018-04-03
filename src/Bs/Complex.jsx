import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _has from 'lodash/has';
import React from 'react';
import {FieldArray} from 'react-final-form-arrays';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import _isFunction from 'lodash/isFunction';

class Complex extends React.Component {

  constructor() {
    super();
    this.renderComplex = this.renderComplex.bind(this);
    this.push = null;
    this.length = 0;
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      collapsed: null
    };
  }

  componentDidMount() {
    if (this.props.mandatory === true && (this.length === undefined || this.length === 0)) {
      this.push({});
    }
  }

  renderChildren(name, count, remove, move, complexIndex, staticField, disabled) {
    const buttons = () => {
      const returnButtons = [];
      if (staticField !== true) {
        if (complexIndex > 0 && count > 1) {
          returnButtons.push(
            <Button
              key={2}
              onClick={() => move(complexIndex, complexIndex - 1)}
              bsStyle={_get(this.props.moveBtn, 'bsStyle', 'default')}
              bsSize={_get(this.props.moveBtn, 'bsSize', undefined)}
              disabled={disabled}
              type="button"
            >
              <i className="fa fa-chevron-up" />
            </Button>
          );
        }
        if (count > 1 && complexIndex < count - 1) {
          returnButtons.push(
            <Button
              key={3}
              onClick={() => move(complexIndex, complexIndex + 1)}
              bsStyle={_get(this.props.moveBtn, 'bsStyle', 'default')}
              bsSize={_get(this.props.moveBtn, 'bsSize', undefined)}
              disabled={disabled}
              type="button"
            >
              <i className="fa fa-chevron-down" />
            </Button>
          );
        }

        if ((this.props.mandatory && count > 1) || (!this.props.mandatory && count > 0)) {
          returnButtons.push(
            <Button
              key={1}
              onClick={() => remove(complexIndex)}
              bsStyle={_get(this.props.removeBtn, 'bsStyle', 'danger')}
              bsSize={_get(this.props.removeBtn, 'bsSize', undefined)}
              className={_get(this.props.removeBtn, 'className', '')}
              title={_get(this.props.removeBtn, 'title', '')}
              disabled={disabled}
              type="button"
            >
              <i className="fa fa-trash" />
            </Button>
          );
        }
      }
      return returnButtons;
    };

    const {header, footer} = _get(this.props, 'panel', {});
    const headerDiv = (<div className="clearfix">
      <ButtonToolbar>
        {buttons()}
      </ButtonToolbar>
      {header}
    </div>);

    const component = () => {
      if (this.props.render) {
        return this.props.render(name);
      }

      return React.Children.map(this.props.children, child =>
        React.cloneElement(child, {name: `${name}.${child.props.name}`, parent: name}));
    };

    if (this.props.row) {
      return (
        <Row>
          <Col {...this.props.left}>
            {component()}
          </Col>
          <Col {...this.props.right}>
            {headerDiv}
          </Col>
        </Row>
      );
    }

    return (
      <Panel className="rfg-cmplx-btn-flds">
        <Panel.Heading>
          {headerDiv}
        </Panel.Heading>
        <Panel.Body>
          {component()}
        </Panel.Body>
        {footer && (<Panel.Footer>{footer}</Panel.Footer>)}
      </Panel>
    );
  }

  renderComplex(props) {
    const {fields, meta: {touched, error}} = props;
    const staticField = props.static;

    this.push = props.fields.push;
    this.length = props.fields.length;

    const thisSize = () => {
      if (this.props.size !== 'medium') {
        return ({bsSize: this.props.size});
      }
    };

    const labelSize = () => {
      if (_has(this.props, 'labelSize')) {
        return this.props.labelSize;
      }
    };

    const fieldSize = () => {
      if (_has(this.props, 'fieldSize')) {
        return this.props.fieldSize;
      }
    };

    const toggle = () => {
      let state = false;
      if (this.state.collapsed === null) {
        state = !(this.props.collapsed && this.props.collapsed === true);
      } else if (this.state.collapsed === false) {
        state = true;
      }
      this.setState({'collapsed': state}, () => {
        // this.props.formChange('itemsx', state);
      });
    };
    if (this.props.label) {
      if (this.state.collapsed === true || (this.state.collapsed === null && this.props.collapsed && this.props.collapsed === true)) {
        return (
          <Row className="rfg-cmplx rfg-cmplx-collapsed">
            <Col componentClass={ControlLabel} {...labelSize()}>
              <Button type="button" onClick={toggle} bsStyle="link" {...thisSize()}>
                {'+ '}
                {this.props.label}
              </Button>
            </Col>
          </Row>
        );
      }
    }

    let disabled = false;
    if (this.props && this.props.disabled && _isFunction(this.props.disabled)) {
      disabled = this.context.checkCondition(this.props.disabled());
    }
    const renderAddButton = () => {
      if (_get(this.props, 'multiple', true) === true || fields.length === 0) {
        const bsStyle = () => {
          if (_get(this.props.addBtn, 'bsStyle') && _get(this.props.addBtn, 'bsStyle') !== 'default') {
            return ({bsStyle: _get(this.props.addBtn, 'bsStyle')});
          }
        };
        return (
          <div className="rfg-cmplx-btn-add">
            {staticField !== true && <Button
              type="button"
              onClick={() => fields.push({})}
              disabled={disabled}
              {...thisSize()}
              {...bsStyle()}
              className={_get(this.props.addBtn, 'className')}
            >
              {_get(this.props.addBtn, 'label', 'toevoegen')}</Button>
            }
            {touched && error && <span>{error}</span>}
          </div>
        );
      }
    };

    return (
      <Row className="rfg-cmplx rfg-cmplx-collapsed">
        {this.props.label &&
        <Col componentClass={ControlLabel} {...labelSize()}>
          <Button type="button" onClick={toggle} bsStyle="link" {...thisSize()}>
            {'- '}
            {this.props.label}
          </Button>
        </Col>}
        <Col {...fieldSize()}>
          {fields.map((field, key) => {
            return (
              <div key={key} className="rfg-cmplx-fields">
                {this.renderChildren(field, fields.length, fields.remove, fields.move, key, staticField, disabled, this.props.mandatory)}
              </div>
            );
          })}
          {renderAddButton()}
        </Col>
      </Row>
    );
  }

  render() {
    if (this.props && this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.context.checkCondition(this.props.hidden) === true) {
        return null;
      }
    } else if (this.props && this.props.show && _isFunction(this.props.show)) {
      if (this.context.checkCondition(this.props.show) !== true) {
        return null;
      }
    }

    return (
      <FieldArray
        component={this.renderComplex}
        name={this.props.name}
        collapsed={this.state.collapsed}
        subscription={this.props.subscription || {values: true, valid: true, invalid: true, length: true}}
      />
    );
  }
}

Complex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  show: PropTypes.func,
  hidden: PropTypes.func,
  disabled: PropTypes.func,
  collapsed: PropTypes.bool,
  render: PropTypes.func,
  moveBtn: PropTypes.object,
  removeBtn: PropTypes.object,
  addBtn: PropTypes.object,
  labelSize: PropTypes.object,
  fieldSize: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  row: PropTypes.bool,
  mandatory: PropTypes.bool
};
Complex.defaultProps = {
  row: false,
  mandatory: false,
  multiple: true
};

Complex.contextTypes = {
  checkCondition: PropTypes.func,
  isStatic: PropTypes.bool
};

export default Complex;

