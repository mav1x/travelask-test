import types from './types';

const initialState = {
  entities: {
    hotels: [],
    filters: {},
  },
  isFiltered: false,
  filteredHotels: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PUT_HOTELS:
      return {
        ...state,
        entities: {
          ...state.entities,
          hotels: action.payload,
        }
      };

    case types.PUT_FILTERS:
      return {
        ...state,
        entities: {
          ...state.entities,
          filters: action.payload,
        }
      };
      
    case types.SUBMIT_FILTERS:
      return {
        ...state,
        isFiltered: true,
      };

    case types.PUT_FILTERED_HOTELS:
      return {
        ...state,
        filteredHotels: action.payload,
      };

    case types.RESET_FILTERS:
      return {
        ...state,
        filteredHotels: [],
        isFiltered: false,
      };  

    default:
      return state;
  }
};

