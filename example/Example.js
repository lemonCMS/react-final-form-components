import React from 'react';
import {hot} from 'react-hot-loader'
import Form from '../src/Form';
import Input from '../src/Bs/Input'
import DateTime from '../src/Bs/DateTime'
import Complex from '../src/Bs/ComplexRow';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
require('./utils/moment');

class Example extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>FinalForm</h1>
        <div className={'well'}>
          <Form>
            <Input
              label='Name'
              placeholder='Name'
              type={'text'}
              name={'name'} />
            <h2>Children</h2>
            <Complex
              name="complex"
              label="complex2"
              left={{xs: 10}}
              right={{xs: 2, className: 'complex-row'}}
              render={name => (
                <Row>
                  <Col xs={3}>
                    <Input
                      type={'text'}
                      placeholder={'first name'}
                      name={`${name}.name1`} />
                  </Col>
                  <Col xs={3}>
                    <Input
                      type={'text'}
                      placeholder={'second name'}
                      name={`${name}.name2`} />
                  </Col>
                  <Col xs={3}>
                    <Input
                      type={'number'}
                      placeholder={'age'}
                      name={`${name}.name3`} />
                  </Col>
                  <Col xs={3}>
                    <DateTime
                      type={'text'}
                      placeholder={'favorite animal'}
                      name={`${name}.name4`} />
                  </Col>
                </Row>
              )} />
          </Form>
        </div>
      </div>
    );
  }
}

export default hot(module)(Example);


