import PropTypes from 'prop-types';
import React from 'react';
import { Label } from 'reactstrap';
import Select from 'react-select';
import { Field } from 'formik';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  isMulti: PropTypes.bool,
};

const FormSelect = ({
  options,
  name,
  label,
  field,
  form,
  isMulti,
}) => {
  const handleChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select
        {...field}
        placeholder="Выбрать"
        options={options}
        onChange={value => handleChange(value)}
        type="text"
        isMulti={isMulti}
      />
    </div>
  );
};

FormSelect.propTypes = propTypes;

export default props => <Field name={props} component={FormSelect} {...props} />;
