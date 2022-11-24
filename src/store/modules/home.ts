import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getHomeGoodsPriceData, getHomeHighScoreData} from "@/api";

export const fetchHomeDataAction:any = createAsyncThunk("fetchdata", (payload,{dispatch}) => {
  getHomeGoodsPriceData().then(res => {
    dispatch(changeGoodsPriceInfo(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodsPriceInfo(state,{payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state,{payload}) {
      state.highScoreInfo = payload
    }
  },
})

export const {changeGoodsPriceInfo,changeHighScoreInfo} = homeSlice.actions

export default homeSlice.reducer;