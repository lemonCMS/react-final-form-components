import React from 'react';
import {hot} from 'react-hot-loader'
import Well from 'react-bootstrap/lib/Well';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from '../src/Form';
import Input from '../src/Bs/Input'
import DateTime from '../src/Bs/DateTime'
import Message from '../src/Bs/Message';
import Button from '../src/Bs/Button';
import Radio from '../src/Bs/Radio';
import Show from '../src/Bs/Show';
import Select from '../src/Bs/Select';
import Checkbox from '../src/Bs/Checkbox';
import Complex from '../src/Bs/ComplexRow';
import Dropdown from '../src/Bs/Dropdown';
import Plupload from '../src/Bs/Plupload';
import Resource from '../src/Bs/Resource';
import TestResource from './TestResource'

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
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async values => {
      await sleep(1000);

      return new Promise((resolve) => {
        if (values.firstname !== 'peter') {
          resolve({firstname: 'Nope! must contain peter'});
        } else {
          window.alert(JSON.stringify(values, 0, 2));
          resolve();
        }
      });
    };

    const size = {
      labelSize: {xs: 3},
      fieldSize: {xs: 9}
    };

    const sizeComplex = {
      fieldSize: {xs: 12}
    };

    return (
      <div className="container">
        <h1>FinalForm Components</h1>
        <div>
          <Form
            debug
            className="form-horizontal"
            subscription={{values: true}}
            validate={(data) => {
              const errors = {};
              if (data.firstname !== 'firstname' && data.firstname !== 'peter') {
                errors.firstname = 'Firstname must contain \"firstname\"';
              }
              return errors;
            }}
            onSubmit={onSubmit}
            initialValues={{
              'choose-3': '1',
              'plupload': [
                {file_original_name: 'test'}
              ]
            }}
          >
            <Well>
              <Plupload name={'plupload'}/>
              <Input label="Firstname" name={"firstname"} type={"text"} {...size} />
              <Input
                label="Sirname"
                name={"sirname"}
                type={"text"}
                {...size} />
              <Input label="Email" name={"email"} type={"email"} {...size} buttonAfter={() => (
                <Dropdown title="Choose" name="choose-3" bu>
                  <option value="" selected>Choose</option>
                  <option value="0">Something</option>
                  <option value="1">Something else</option>
                </Dropdown>
              )}/>
              <DateTime label="birthday" name={"birthday"} {...size} conf={{timeFormat: false}}/>
              <Select label="Choose" name="choose-1" {...size}>
                <option value="0">Something</option>
                <option value="1">Something else</option>
              </Select>
              <Checkbox label="Choose" name="choose-2" {...size}>
                <option value="0">Something</option>
                <option value="1">Something else</option>
              </Checkbox>
              <Checkbox label="Choose single value" name="choose-3" {...size}>
                <option value={true}>Something else</option>
              </Checkbox>
              <Dropdown title="Choose" label="Choose" name="choose-3" {...size}>
                <option value="" selected>Choose</option>
                <option value="0">Something</option>
                <option value="1">Something else</option>
              </Dropdown>
            </Well>

            <Well>
              <Radio label="I have kids" name="has_kids" {...size}>
                <option value="0">Nope</option>
                <option value="1">Yep</option>
              </Radio>
              <Show
                show={data => {
                  return data.has_kids === "1";
                }}
              >
                <h4>How many kids?</h4>
                <Complex name={'kids'} left={{xs: 9}} right={{xs: 3}} render={(name) => (
                  <Row>
                    <Col xs={6}>
                      <Input placeholder="Name" name={`${name}.name`} type={"text"} {...sizeComplex} />
                    </Col>
                    <Col xs={6}>
                      <Input placeholder="Age" name={`${name}.age`} type={"number"} {...sizeComplex} />
                    </Col>
                  </Row>
                )}>
                </Complex>
              </Show>

              <Resource
                name={'resource'}
                resource={props => (<TestResource {...props} />)
                }>
                <option value={1}>Selected option 1</option>
              </Resource>


            </Well>
            <Message type="success">Message after success</Message>
            <Message type="error">Oopsie!</Message>
            <Button type="submit">send</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default hot(module)(Example);


