import { Actions, ActionTypes } from './actions';

export const initialState = {
  items: [],
  cart: [],
};

export function ShopReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload],
      };
    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionTypes.Remove:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => item.name !== action.payload.name),
        ],
      };
    default:
      return state;
  }
}
