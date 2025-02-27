Install

- npm install @reduxjs/toolkit react-redux

### Create Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
```

---

### Create Slice

- slice contains actions and async logics

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching products from API
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

---

### Reducers

- State and Reducer logics are here

```javascript
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../slices/productSlice"; // Import the async thunk

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
```

---

### Provide Store

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### Use Case

- implemetation

```javascript
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addProduct, removeProduct } from "../redux/reducers/productReducer";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => dispatch(addProduct(product))}>Add</button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```
