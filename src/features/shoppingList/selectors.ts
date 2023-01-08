import { createSelector } from 'reselect';
import { AppState } from '../../app/reducers';

export const getShoppingListState = createSelector((state: AppState) => state, ({ shoppingList }) => shoppingList);
export const getCategoriesListSelector = createSelector(getShoppingListState, ({ categories }) => categories);
export const getProductListSelector = createSelector(getShoppingListState, ({ productListByCategory }) => productListByCategory);
export const getTotalItemsSelector = createSelector(getShoppingListState, ({ totalItems }) => totalItems);
