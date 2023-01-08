import {
    Product,
    ProductsInCategory,
} from './types';

export const addProduct = (productListByCategory: ProductsInCategory[], newProduct: {categoryName:string, productName: string}) => {
    let products = [...productListByCategory]
    const categoryId = productListByCategory.find((item) => item.name === newProduct.categoryName)?.categoryId || 1
    const i = productListByCategory.findIndex((item: ProductsInCategory) => item.name === newProduct.categoryName)
    if(i > -1) {
         const productIndex = productListByCategory[i].products.findIndex((product: Product) => product.name === newProduct.productName)
        productIndex > - 1 ?products[i].products[productIndex].count ++ :
            products[i].products.push({productId: (products[i].products.at(-1)?.productId || 0) + 1, name: newProduct.productName, count: 1})
    } else {
        products.push(
            {
                categoryId: categoryId,
                name: newProduct.categoryName,
                products: [{productId: 1, name: newProduct.productName, count:1}]
            }
        )
    }
    return products;

}