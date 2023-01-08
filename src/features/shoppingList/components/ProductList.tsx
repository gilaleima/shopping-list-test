import { makeStyles } from '@material-ui/core';
import {
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { getProductListSelector } from '../selectors';
import {
    Product,
    ProductsInCategory,
} from '../types';

export const useStyles = makeStyles(() => ({
    wrapperList: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            margin: '50px',
        }
    }
}));

export const ProductList: React.FC = () => {

    const productListByCategory: ProductsInCategory[] = useSelector(getProductListSelector)
    const classes = useStyles();
    return (
        <div className={classes.wrapperList}>
            {productListByCategory.map((category) => (
                <div>
                    <div>{category.name} - {category.products.reduce((sum, item) => sum+ item.count, 0)}</div>
                    <List>
                        {category.products.map((product: Product) => (
                            <ListItem key={product.productId}>
                                <ListItemText
                                    primary={`${product.name} - ${product.count}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>

            ))}
        </div>
    )
};
