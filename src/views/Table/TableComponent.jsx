import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';

import columns from './columns';

const propTypes = {
  hotels: PropTypes.array,
  filteredHotels: PropTypes.array,
  isFiltered: PropTypes.bool,
};

const TableComponent = ({ hotels, filteredHotels, isFiltered }) => 
  isFiltered && Object.keys(filteredHotels).length === 0 
  ? <p>Не найдено...</p>
  : (
    <ReactTable
      data={Object.keys(filteredHotels).length !== 0 ? filteredHotels : hotels}
      columns={columns}
      sortable={false}
      resizable={false}
      minRows={0}
      defaultPageSize={3}
      showPageSizeOptions={false}
    />
  );

TableComponent.propTypes = propTypes;

export default TableComponent;
