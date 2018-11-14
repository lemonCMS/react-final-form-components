# React final form component

A set of bootstrap components with added functionality to make it easier to create complex forms

### Installment
Install with npm
````bash
npm install react-final-form-component --save
````

Or with yarn
````bash
yarn add react-final-form-component
````
### Demo
[https://ultimatejs.babyblox.nl/forms](https://ultimatejs.babyblox.nl/forms)

### How to use
````jsx harmony
import React from "react";
import { render } from "react-dom";
import Well from "react-bootstrap/lib/Well";
import Clearfix from "react-bootstrap/lib/Clearfix";
import Form from "react-final-form-components/dist/Form";
import Input from "react-final-form-components/dist/Bs/Input";
import Message from "react-final-form-components/dist/Bs/Message";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const size = {
  labelSize: { xs: 3 },
  fieldSize: { xs: 9 }
};

const validate = values => {
  const errors = {};
  if (!values.username || values.username !== "username") {
    errors.username = 'Username must be "username"';
  }
  if (!values.password || values.password !== "password") {
    errors.password = 'Password must be "password"';
  }
  return errors;
};

const App = () => (
  <div style={styles}>
    <Well>
      <Form className="form-horizontal" validate={validate}>
        <Input label="Username" name={"username"} type={"text"} {...size} />
        <Input label="Pasword" name={"password"} type={"password"} {...size} />
        <Message type="success">Message after success</Message>
        <Message type="error">Oopsie!</Message>
        <button type="submit">send</button>
      </Form>
      <Clearfix />
    </Well>
  </div>
);

render(<App />, document.getElementById("root"));

````
[Try online](https://codesandbox.io/s/r4q7y39pkn)

## More examples
[Example with FieldArray](https://codesandbox.io/s/n0n2z5xnmp)

