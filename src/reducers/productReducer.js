import { GET_PRODUCT_LIST, GET_PRODUCT_ITEM } from '../utils/constants';

const INITIAL_STATE = {
  productList: [],
  productItem: {}
};

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
          ...state,
          productList: action.payload
      };
    case GET_PRODUCT_ITEM:
      return {
          ...state,
          productItem: action.payload
      };
    default:
      return state;
  }
}