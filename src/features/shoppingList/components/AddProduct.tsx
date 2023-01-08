import { makeStyles } from '@material-ui/core';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import * as React from 'react';

import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/hooks';
import { addProduct } from '../actions';
import {
    getCategoriesListSelector,
    getProductListSelector,
} from '../selectors';
import { Category } from '../types';

export const useStyles = makeStyles(() => ({
   form: {
       '& > div, button': {
           margin: '20px'
       }
   }
}));
export const AddProduct: React.FC = () => {
    const classes = useStyles();
    const categoriesList: Category[] = useAppSelector(getCategoriesListSelector)
    const dispatch = useAppDispatch()
    const [product, setProduct] = useState<{categoryName: string, productName: string}>({categoryName:'', productName: ''})
    const handleChange = (e: any) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addProduct.request((product)))
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="outlined-basic"
                label="מוצר"
                variant="outlined"
                value={product?.productName}
                onChange={handleChange}
                name='productName'
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>

                <Select
                    value={product.categoryName}
                    label="קטגוריה"
                    onChange={handleChange}
                    name="categoryName"
                >
                    {
                        categoriesList.map((category) => (
                            <MenuItem key={category.categoryId} value={category.name}>{category.name}</MenuItem>
                        ))
                    }

                    </Select>
            </FormControl>
            <Button type='submit' variant={'outlined'}>הוסף</Button>
        </form>
    )
};
