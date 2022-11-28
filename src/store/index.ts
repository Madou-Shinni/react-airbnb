import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailSlice from "@/store/modules/detail";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailSlice
  }
})

export default store;