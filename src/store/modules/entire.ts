import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getEntireRoomList} from "@/api/modules/entire";

export const fetchEntireDataAction:any = createAsyncThunk<any,any>("fetchdata",
  async (payload = 0,{dispatch, getState}:any) => {
    // 获取分页参数 payload 是传入的参数,默认为0
    dispatch(changeCurrentPage(payload))
    // 1.根据页码获取最新数据
    const currentPage = getState().entire.currentPage
    const res:any = await getEntireRoomList(currentPage * 20)

    // 2.将数据保存到store
    dispatch(changeRoomList(res.list))
    dispatch(changeTotalCount(res.totalCount))
})

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, // 当前页
    roomList: [], // 房间列表
    totalCount: 0 // 总数
  },
  reducers: {
    changeRoomList(state, { payload }) {
      state.roomList = payload
    },
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload
    },
    changeTotalCount(state, { payload }) {
      state.totalCount = payload
    },
  },
})

export const {
  changeRoomList,
  changeCurrentPage,
  changeTotalCount,
} = entireSlice.actions

export default entireSlice.reducer;