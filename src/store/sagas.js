/* eslint-disable array-callback-return */

import {
  all,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import actions from './actions';
import types from './types';

import { hotels } from '../hotels.json';

function* putHotels() {
  yield put(actions.putHotels(hotels));
}

function* putFilters() {
  const countries = [];
  const types = [];
  const starsCounts = [];
  const min_prices = [];

  hotels.map(({ country, type, stars, min_price }) => {
    if (!countries.includes(country)) {
      countries.push(country);
    }

    if (!types.includes(type)) {
      types.push(type);
    }

    if (!starsCounts.includes(stars)) {
      starsCounts.push(stars);
    }

    if (!min_prices.includes(min_price)) {
      min_prices.push(min_price);
    }
  });

  yield put(actions.putFilters({
    countries,
    types,
    starsCounts,
    min_prices,
  }))
};

function* submitFilters({ filters }) {
  const hotels = yield select(state => state.entities.hotels);

  const {
    country,
    type,
    stars,
    reviews_amount,
    min_price,
  } = filters;

  const filteredHotels = hotels.filter(hotel => {
    const countryFilter = !country || country.value === hotel.country;
    const typeFilter = !type || type.value === hotel.type;
    const starsFilter = stars.length === 0 || stars.includes(hotel.stars);
    const reviewsAmountFilter = !reviews_amount || reviews_amount <= hotel.reviews_amount;
    const minPriceFilter = min_price >= hotel.min_price;

    return countryFilter && typeFilter && starsFilter && reviewsAmountFilter && minPriceFilter;
  })
  
  yield put(actions.putFilteredHotels(filteredHotels));
}

export default function* mainSaga() {
  yield all([
    putHotels(),
    putFilters(),
    takeLatest(types.SUBMIT_FILTERS, submitFilters),
  ]);
}