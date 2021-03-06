import {LOAD_CATEGORIES, LOAD_CATEGORIES_FAIL, LOAD_CATEGORIES_SUCCESS, categoryActions, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_FAIL} from './user.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import  { products } from '../interfaces/products.model';
import { categories } from '../interfaces/categories.model';
import * as fromRoot from '../app.reducer'

export interface HomeState {
  categories: categories[];
  products: products[]
}
export interface State extends fromRoot.State {
  userDetails: HomeState;
}
const initialState: HomeState = {
  categories: [],
  products: []
}

export function categoryReducer(state = initialState, action: categoryActions) {
  switch(action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
      }
    case LOAD_CATEGORIES_SUCCESS: 
    return {
      ...state,
      categories: action.payload
    }
  
    case LOAD_CATEGORIES_FAIL:
    return {
      ...state,
    }
    case LOAD_PRODUCTS: 
    return {
      ...state
    }
  case LOAD_PRODUCTS_SUCCESS: 
  return {
    ...state,
    products: action.payload
  }
  case LOAD_PRODUCTS_FAIL: 
  return {
    ...state,
    products: action.payload
  }
  default: {
    return state
  }
  }
}
export const getCategoriesState = createFeatureSelector<HomeState>('userDetails');
export const getCategories = createSelector(getCategoriesState, (state: HomeState) => state.categories)
export const getProducts = createSelector(getCategoriesState, (state: HomeState) => state.products)


