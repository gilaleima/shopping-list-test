
import { all } from 'redux-saga/effects';
import { watchShoppingList } from '../features/shoppingList/sagas';

export function* rootSaga() {
    yield all([
        watchShoppingList(),
        // TODO Replace with a real saga.
    ]);
}
