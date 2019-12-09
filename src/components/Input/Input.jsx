import PropTypes from 'prop-types';
import React from 'react';
import { Label } from 'reactstrap';
import { Field } from 'formik';
import NumberFormat from 'react-number-format';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

const FormInput = ({
  name,
  field,
  label,
  type,
  ...props
}) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <div>
      <NumberFormat
        {...field}
        {...props}
        id={name}
        type={type}
        decimalSeparator={false}
        allowNegative={false}
      />
    </div>
  </div>
);

FormInput.propTypes = propTypes;

export default props => <Field name={props} component={FormInput} {...props} />;
