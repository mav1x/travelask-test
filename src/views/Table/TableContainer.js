import { connect } from 'react-redux';
import TableComponent from './TableComponent';

const mapStateToProps = ({ entities: { hotels }, isFiltered, filteredHotels }) => ({
  hotels,
  isFiltered,
  filteredHotels,
});

export default connect(mapStateToProps)(TableComponent);