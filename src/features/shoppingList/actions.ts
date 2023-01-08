import {
    createAction,
    createAsyncAction,
} from 'typesafe-actions';
import {
    Category,
    ProductsInCategory,
} from './types';

export const getCategoriesList = createAsyncAction(
    'SHOPPING/GET_CATEGORIES_LIST_REQUEST',
    'SHOPPING/GET_CATEGORIES_LIST_SUCCESS',
    'SHOPPING/GET_CATEGORIES_LIST_FAILURE',
)<void, Category[], string>();

export const getProductsList = createAsyncAction(
    'SHOPPING/GET_PRODUCTS_LIST_REQUEST',
    'SHOPPING/GET_PRODUCTS_LIST_SUCCESS',
    'SHOPPING/GET_PRODUCTS_LIST_FAILURE',
)<void, ProductsInCategory[], string>();

export const addProduct = createAsyncAction(
    'SHOPPING/ADD_PRODUCT_REQUEST',
    'SHOPPING/ADD_PRODUCT_SUCCESS',
    'SHOPPING/ADD_PRODUCT_FAILURE',
)<{categoryName: string, productName: string}, {categoryName: string, productName: string}, string>();

export const setTotalItems = createAction(
    'SHOPPING/SET_TOTAL_ITEMS',
)<number>();
