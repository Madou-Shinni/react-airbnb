import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getHomeGoodsPriceData} from "@/api";

export const fetchHomeDataAction:any = createAsyncThunk("fetchdata", async (payload) => {
  const res = await getHomeGoodsPriceData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodsPriceInfo(state,{payload}) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state,{payload}) {
      console.log(payload);
      state.goodPriceInfo = payload
    }
  }
})

export const {changeGoodsPriceInfo} = homeSlice.actions

export default homeSlice.reducer;