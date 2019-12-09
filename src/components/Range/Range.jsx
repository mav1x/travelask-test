import PropTypes from 'prop-types';
import React from 'react';
import { Label } from 'reactstrap';
import { Field } from 'formik';
import Slider from 'react-input-range';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

const RangeInput = ({
  name,
  field,
  form,
  label,
  ...props
}) => {
  const handleChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div>
        <Slider
          {...field}
          {...props}
          onChange={value => handleChange(value)}
        />
      </div>
    </div>
  );
};

RangeInput.propTypes = propTypes;

export default props => <Field name={props} component={RangeInput} {...props} />;
