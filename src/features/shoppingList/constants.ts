import {
    Category,
    ProductsInCategory,
} from './types';

export const productListDemo: ProductsInCategory[] = [
    {
        categoryId: 1,
        name: 'מוצרי חלב',
        products: [{productId: 6, count:1, name: 'גבינה'}, {productId: 6, count: 1, name: 'חלב'}],
    },
    {
        categoryId: 2,
        name: 'מוצרי בשר',
        products: [{productId: 6, count: 1, name: 'הודו'}, {productId: 6, count: 1, name: 'עוף'}],
    },
];
export const categoriesDemo: Category[] = [
    {
        categoryId: 1,
        name: 'מוצרי חלב',
    },
    {
        categoryId: 2,
        name: 'מוצרי בשר',

    },
];

