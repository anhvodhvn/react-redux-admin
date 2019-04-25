import { GET_MERCHANT_LIST } from '../utils/constants';

const INITIAL_STATE = {
  merchantList: [],
  currentMerchant: {}
};

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case GET_MERCHANT_LIST:
      return {
          ...state,
          merchantList: action.payload
      };
    default:
      return state;
  }
}