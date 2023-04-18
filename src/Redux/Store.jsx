import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./Features/CocktailSlice";

const store = configureStore({
  reducer: {
    app: cocktailSlice,
  },
});

export default store;
