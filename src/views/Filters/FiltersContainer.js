import { connect } from 'react-redux';
import FiltersComponent from './FiltersComponent';

import actions from 'store/actions';

const mapStateToProps = ({ entities: { filters }, isFiltered }) => ({
  filtersEntities: filters,
  isFiltered,
});

const mapDispatchToProps = dispatch => ({
  submitFilters: filters => dispatch(actions.submitFilters(filters)),
  resetFilters: () => dispatch(actions.resetFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);