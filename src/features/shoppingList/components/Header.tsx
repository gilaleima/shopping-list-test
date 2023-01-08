import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { getTotalItemsSelector } from '../selectors';

export const useStyles = makeStyles(() => ({
    header: {
        textAlign: 'center',
        height: '50px',
        backgroundColor: '#81b3e5',
        fontSize: '20px',
        fontWeight: 'bolder'
    }
}));

export const Header: React.FC = () => {
    const classes = useStyles();
    const totalItem = useAppSelector(getTotalItemsSelector)
    return (
        <div>
            <div className={classes.header}>
                רשימת קניות
            </div>
            <p>סה"כ : {totalItem} מוצרים </p>
        </div>
    )
};
