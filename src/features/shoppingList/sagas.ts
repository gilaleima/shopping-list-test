import {
    all,
    call,
    takeLatest,
    put,
    select
} from 'redux-saga/effects';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import * as actions from './actions';
import {
    categoriesDemo,
    productListDemo,

} from './constants';
import {
    getProductListSelector,
    getTotalItemsSelector,
} from './selectors';
import {
    Category,
    Product,
    ProductsInCategory,
} from './types';

export function* requestGetCategoryList() {
    try {
        // const categories: Category[] = yield call();
        const categories: Category[] = categoriesDemo;
        yield put(actions.getCategoriesList.success(categories));
    } catch (e) {
        yield put(actions.getCategoriesList.failure(''));
    }
}

export function* requestGetItemList() {
    try {
        // const items: ProductsInCategory[] = yield call();
        const productList: ProductsInCategory[] = productListDemo;
        const totalItems = productList.reduce((sum, item) => sum+ item.products.length, 0)
        yield put(actions.setTotalItems(totalItems));
        yield put(actions.getProductsList.success(productList));
    } catch (e) {
        yield put(actions.getProductsList.failure(''));
    }
}

export function* requestAddProduct({payload}: ActionType<typeof actions.addProduct.request>) {
    // במקרה והייתי בונה את הסרבר מוציאה קריאה של הוספה ומתווסף לדטה בייס
    // ומפעילה שוב את requestGetItemList לקבל רשימה מעודכנת
    // ולמקרה הזה הכי נכון לבנות את הTYPES בצורה כזו ולא עם קשרי גומלין בקליינט
    // אך בגלל שלא בניתי את הסרבר יש טיפה לוגיקה לא הכי יפה... בUTILS

    try {
        // const product: ProductsInCategory = yield call();
        const totalItems: number = yield select(getTotalItemsSelector);
        yield put(actions.addProduct.success(payload))
        yield put(actions.setTotalItems(totalItems + 1));
        // requestGetItemList()
    } catch (e) {
        yield put(actions.getProductsList.failure(''));
    }
}

export function* watchGetCategoriesList() {
    yield takeLatest(getType(actions.getCategoriesList.request), requestGetCategoryList);
}

export function* watchGetItemList() {
    yield takeLatest(getType(actions.getProductsList.request), requestGetItemList);
}

export function* watchAddProduct() {
    yield takeLatest(getType(actions.addProduct.request), requestAddProduct);
}

export function* watchShoppingList() {
    yield all([
        call(watchGetCategoriesList),
        call(watchGetItemList),
        call(watchAddProduct),
    ]);
}
