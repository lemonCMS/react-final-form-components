import React from 'react';
import {hot} from 'react-hot-loader'
import Well from 'react-bootstrap/lib/Well';
import Form from '../src/Form';
import Input from '../src/Bs/Input'
import DateTime from '../src/Bs/DateTime'
import Message from '../src/Bs/Message';
import Button from '../src/Bs/Button';
import Radio from '../src/Bs/Radio';
import Show from '../src/Bs/Show';

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
      window.alert(JSON.stringify(values, 0, 2));
    };

    const size = {
      labelSize: {xs: 3},
      fieldSize: {xs: 9}
    };

    return (
      <div className="container">
        <h1>FinalForm Components</h1>
        <div className={'well'}>
          <Form
            debug
            className="form-horizontal"
            subscription={{values: true}}
            validate={() => {
            }}
            onSubmit={onSubmit}
          >
            <Well>
              <Input label="Firstname" name={"firstname"} type={"text"} {...size} />
              <Input
                disabled={(data) => (data.firstname !== 'raymond')}
                label="Sirname"
                name={"sirname"}
                type={"text"}
                {...size} />
              <Input label="Email" name={"email"} type={"email"} {...size} />
              <DateTime label="birthday" name={"birthday"} {...size} />
            </Well>

            <Well>
              <Radio label="I have kids" name="has_kids" {...size}>
                <option value="0">Nope</option>
                <option value="1">Yep</option>
              </Radio>
              <Show
                show={data => {
                  console.log(data);
                  return data.has_kids === "1";
                }}
              >
                <h4>How many kids?</h4>
              </Show>
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


