import PropTypes from 'prop-types';
import React from 'react';
import { Label, InputGroup } from 'reactstrap';
import { FieldArray } from 'formik';

const propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string,
};

const Checkbox = ({
  name,
  items,
  label,
}) => {
  items = items.sort((a, b) => a - b);
  return (
    <>
      <Label>{label}</Label>
      <FieldArray
        name={name}
        render={({ form: { values }, ...arrayHelpers }) => (
          <>
            {items.map(item => (
              <InputGroup key={item}>
                <Label>
                  <input
                    name={name}
                    type="checkbox"
                    value={item}
                    checked={values.stars.includes(item)}
                    onChange={e => {
                      if (e.target.checked) arrayHelpers.push(item);
                      else {
                        const idx = values.stars.indexOf(item);
                        arrayHelpers.remove(idx);
                      }
                    }}
                  />
                  {" "}
                  {item}
                </Label>
            </InputGroup>
            ))}
          </>
        )}
      />
    </>
  );
};

Checkbox.propTypes = propTypes;

export default Checkbox;