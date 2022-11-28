import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailSlice from "@/store/modules/detail";
import mainSlice from "@/store/modules/main";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailSlice,
    main: mainSlice
  }
})

export default store;