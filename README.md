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

### How to use
````jsx harmony
import React from 'react';
import Form from 'react-final-form-components/lib/Form';
import Input from 'react-final-form-components/lib/bs/Input';

export default class Examplex extends React.Component {
  
  submit = async () => {
   return  new Promise([]).then(resolve => resolve());
  };
  
  render() {
    return (
      <Form>
        <Input name={'hello'} type={'text'} />
      </Form>
    )
  }
  
}
````


### Components
