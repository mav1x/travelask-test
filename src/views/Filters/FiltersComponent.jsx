import PropTypes from 'prop-types';
import React from 'react';
import { 
  Form,  
  FormGroup, 
  Button,
} from 'reactstrap';
import { withFormik } from 'formik';

/* Components */
import {
  Checkboxes,
  Select,
  Input,
  Range,
} from '../../components';

const propTypes = {
  filtersEntities: PropTypes.object,
  handleSubmit: PropTypes.func,
  resetFilters: PropTypes.func,
  resetForm: PropTypes.func,
  isFiltered: PropTypes.bool,
};

const Filters = ({ 
  filtersEntities, 
  handleSubmit, 
  resetFilters, 
  resetForm,
  isFiltered,
}) => (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Select
          label="Страна"
          name="country"
          options={filtersEntities.countries.map(value => ({ value, label: value }))}
        />
      </FormGroup>

      <FormGroup>
        <Select
          label="Tип"
          name="type"
          isMulti
          options={filtersEntities.types.map(value => ({ value, label: value }))} 
        />
      </FormGroup>

      <FormGroup>
        <Checkboxes
          label="Звезды"
          name="stars"
          items={filtersEntities.starsCounts}
        />
      </FormGroup>

      <FormGroup>
        <Input
          label="Количество отзывов от"
          name="reviews_amount"
        />
      </FormGroup>

      <FormGroup>
        <Range
          label="Цена до"
          name="min_price"
          maxValue={Math.max.apply(Math, filtersEntities.min_prices)}
          minValue={Math.min.apply(Math, filtersEntities.min_prices)}
        />
      </FormGroup>

      <br />
      <FormGroup>
        <Button color="primary" type="submit">Применить фильтры</Button>
      </FormGroup>

      <FormGroup>
        <Button
          color="secondary"
          onClick={() => {
            resetFilters();
            resetForm();
          }}
          disabled={!isFiltered}
        >
          Сбросить
        </Button>
      </FormGroup>
      
    </Form>
);

Filters.propTypes = propTypes;

export default withFormik({
  mapPropsToValues: ({ filtersEntities }) => ({
    country: '',
    type: '',
    stars: [],
    reviews_amount: '',
    min_price: Math.max.apply(Math, filtersEntities.min_prices),
  }),
  handleSubmit: (values, { props: { submitFilters } }) => {
    submitFilters(values);
  },
})(Filters);

