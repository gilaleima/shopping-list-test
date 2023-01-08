import { useEffect } from 'react';
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
    getCategoriesList,
    getProductsList,
} from './actions';
import { AddProduct } from './components/AddProduct';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

export const ShoppingList: React.FC = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCategoriesList.request());
        dispatch(getProductsList.request());
    }, [])

    return (
        <div style={{direction: 'rtl', textAlign: 'center'}}>
            <Header/>
            <AddProduct />
            <ProductList/>
        </div>
    )
};
