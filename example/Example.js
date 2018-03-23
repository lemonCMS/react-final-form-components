import React from 'react';
import {hot} from 'react-hot-loader'
import Form from '../src/Form';
import Input from '../src/Bs/Input'
import DateTime from '../src/Bs/DateTime'
import Complex from '../src/Bs/ComplexRow';
import Message from '../src/Bs/Message';
import TinyMce from '../src/Bs/TinyMce';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import _get from 'lodash/get';


require('./utils/moment');

class Example extends React.Component {

  constructor() {
    super();
    this.loadData = this.loadData.bind(this);
    this.state = {};
    this.values = {};
    this.counter = 1;
  }

  loadData() {
    if (!this.values.complex) {
      this.values.complex = [];
    }
    this.values.complex.push({name1: this.counter});
    this.setState(Object.assign({}, this.values, {name: `raymond.${this.counter}`}), () => {
      this.counter += 1;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>FinalForm Components</h1>
        <div className={'well'}>
          <Form
            initialValues={this.state}
            validate={() => {
              const errors = {};
              errors.name = 'Must contain Raymond';
              errors.complex = [];
              errors.complex[0] = {};
              errors.complex[0].name1 = 'Must contain Raymond';
              return errors;
            }}
            listen={(values) => (this.values = values)}
          >
            <Input
              label='Name'
              placeholder='Name'
              type={'text'}
              name={'name'}/>
            <Input
              label='Middlename'
              placeholder='middlename'
              type={'text'}
              name={'middlename'}/>

            <TinyMce name={'tiny'} />

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
                      disabled={(values) => (values.name === 'raymond')}
                      name={`${name}.name1`}/>
                  </Col>
                  <Col xs={3}>
                    <Input
                      type={'text'}
                      placeholder={'second name'}
                      disabled={(data) => (_get(data, `${name}.name1`) === "1")}
                      name={`${name}.name2`}/>
                  </Col>
                  <Col xs={3}>
                    <Input
                      type={'number'}
                      placeholder={'age'}
                      name={`${name}.name3`}/>
                  </Col>
                  <Col xs={3}>
                    <DateTime
                      type={'text'}
                      placeholder={'favorite animal'}
                      name={`${name}.name4`}
                    />
                  </Col>
                </Row>
              )}/>
            <button type={'submit'}>submit</button>
            <button type={'button'} onClick={this.loadData}>load data</button>

            <Message type={'success'}>
              Top Het is helemaal top gegaan.
            </Message>
            <Message type={'error'}>
              je hebt iets te fixen man!
            </Message>
          </Form>
        </div>
      </div>
    );
  }
}

export default hot(module)(Example);


