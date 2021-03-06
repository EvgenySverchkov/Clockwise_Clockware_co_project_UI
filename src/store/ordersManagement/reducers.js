import * as actionType from "./actionTypes";

export default function orders_reducer(state = {}, action) {
  switch (action.type) {
    case actionType.ADD_ORDERS:
      return {
        ...state,
        ordersArr: action.payload,
      };
    case actionType.DELETE_ORDER:
      return {
        ...state,
        ordersArr: state.ordersArr.filter((item) =>
          item.id !== action.payload ? true : false
        ),
      };
    case actionType.UPDATE_ORDER:
      return {
        ...state,
        ordersArr: state.ordersArr.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case actionType.ADD_CURRNET_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };
    case actionType.CHANGE_ADMIN_ORDER_FORM_IS_LOAD:
      return {
        ...state,
        adminOrderFormIsLoad: action.payload,
      };
    case actionType.INIT_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };
    case actionType.CHANGE_USER_ORDERS_LIST_IS_LOAD:
      return {
        ...state,
        userOrdersListIsLoad: action.payload,
      };
    case actionType.CHANGE_CLIENT_ORDER_FORM_IS_LOAD:
      return {
        ...state,
        orderFormIsLoad: action.payload,
      };
    default:
      return state;
  }
}
