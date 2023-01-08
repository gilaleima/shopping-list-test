import { Reducer } from 'redux';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import * as actions from './actions';
import {
    categoriesDemo,
    productListDemo,
} from './constants';
import { ShoppingListState } from './types';
import { addProduct } from './utils';


type Actions = ActionType<typeof actions>;

const initialState: ShoppingListState = {
    categories: categoriesDemo,
    productListByCategory: productListDemo,
    totalItems: 0
};

export const ShoppingListReducer: Reducer<ShoppingListState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.getCategoriesList.success): {
            return {
                ...state,
                categories: action.payload,
            };
        }
        case getType(actions.getProductsList.success): {
            return {
                ...state,
                productListByCategory: action.payload,
            };
        }
        case getType(actions.setTotalItems): {
            return {
                ...state,
                totalItems: action.payload,
            };
        }
        case getType(actions.addProduct.success): {
            return {
                ...state,
                productListByCategory: addProduct(state.productListByCategory, action.payload),
            };
        }
        default: {
            return state;
        }
    }
};
