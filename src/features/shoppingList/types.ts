export interface ShoppingListState {
   categories: Category[],
   productListByCategory: ProductsInCategory[],
   totalItems: number,
}

export interface Category {
    categoryId: number,
    name: string,
}

export interface ProductsInCategory {
    categoryId: number,
    name: string,
    products: Product[],
}

export interface Product {
    productId: number,
    name: string,
    count: number,
}
