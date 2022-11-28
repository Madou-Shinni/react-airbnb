import {createSlice} from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfo(state, {payload}) {
      state.detailInfo = payload
    }
  }
})

export const {changeDetailInfo} = detailSlice.actions

export default detailSlice.reducer;