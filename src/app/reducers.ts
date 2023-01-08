
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { ShoppingListReducer } from '../features/shoppingList/reducer';

export const reducers = combineReducers({
    shoppingList: ShoppingListReducer,
});

export type AppState = StateType<typeof reducers>;
