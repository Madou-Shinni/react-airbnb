import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getHomeDiscountData, getHomeGoodsPriceData, getHomeHighScoreData, getHomeHotRecommendData} from "@/api";

export const fetchHomeDataAction:any = createAsyncThunk("fetchdata", (payload,{dispatch}) => {
  getHomeGoodsPriceData().then(res => {
    dispatch(changeGoodsPriceInfo(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfo(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfo(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodsPriceInfo(state,{payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state,{payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state,{payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state,{payload}) {
      state.recommendInfo = payload
    }
  },
})

export const {
  changeGoodsPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo
} = homeSlice.actions

export default homeSlice.reducer;