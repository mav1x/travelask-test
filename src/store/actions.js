import types from './types';

const putHotels = hotels => ({ type: types.PUT_HOTELS, payload: hotels });
const putFilters = filters => ({ type: types.PUT_FILTERS, payload: filters });
const submitFilters = filters => ({ type: types.SUBMIT_FILTERS, filters });
const putFilteredHotels = hotels => ({ type: types.PUT_FILTERED_HOTELS, payload: hotels });
const resetFilters = () => ({ type: types.RESET_FILTERS });

export default {
  putHotels,
  putFilters,
  submitFilters,
  putFilteredHotels,
  resetFilters,
};
