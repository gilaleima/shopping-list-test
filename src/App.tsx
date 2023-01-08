
import { Routes, Route } from "react-router-dom";
import { ShoppingList } from './features/shoppingList/ShoppingList';

function App() {
  return (
      <div>
        <Routes>
          <Route
              path={'/'}
              element={<ShoppingList/>}
          />
        </Routes>
      </div>
  );
}

export default App;
