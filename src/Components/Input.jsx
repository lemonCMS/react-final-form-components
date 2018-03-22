import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl'

export default ({input, field}) => {
  return (
    <FormControl type={field.type} {...input} />
  );
}
