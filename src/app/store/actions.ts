import { Action } from '@ngrx/store';
import { Guitar } from '../models/guitar.model';

export enum ActionTypes {
  Add = '[Guitars] Add to cart',
  Remove = '[Guitars] Remove from cart',
  LoadItems = '[Guitars] Load items from server',
  LoadSuccess = '[Guitars] Load success',
}
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: Guitar) {}
}
export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;
  constructor(public payload: Guitar) {}
}
export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}
export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: Guitar[]) {}
}
export type Actions = AddToCart | RemoveFromCart | GetItems | LoadItems;
