import CONSTANTS from '../utils/constants';
const { GET_ORDER_LIST, GET_ORDER_ITEM } = CONSTANTS;

const INITIAL_STATE = {
  orderList: [],
  orderItem: {
    orderDetail: []
  }
};

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case GET_ORDER_LIST:
      return {
          ...state,
          orderList: action.payload
      };
    case GET_ORDER_ITEM:
      return {
          ...state,
          orderItem: action.payload
      };
    default:
      return state;
  }
}