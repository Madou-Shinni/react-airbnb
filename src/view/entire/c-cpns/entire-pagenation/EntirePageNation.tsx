import React from "react"
import Pagination from '@mui/material/Pagination';

import { EntirePageNationWrapper } from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchEntireDataAction} from "@/store/modules/entire";

type Props = {}

const EntirePageNation: React.FC<Props> = (props) => {
  const {totalCount,currentPage,roomList} = useSelector((state:any) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 +1
  const endCount = (currentPage + 1) * 20

  /* event handle */
  const dispatch = useDispatch();
  function pageChangeHandle(event: any, pageCount: number) {
    /* 回到顶部 */
    window.scroll(0,0)

    // 更新页码(这里pageCount是从1开始的，所以需要-1)
    // dispatch(changeCurrentPage(pageCount - 1))
    // 获取最新的数据
    dispatch(fetchEntireDataAction(pageCount - 1))
  }

  return <EntirePageNationWrapper>
    {/* !! 转为boolean */}
    {
      !!roomList.length &&
      (
        <div className={"info"}>
          <Pagination count={totalPage} onChange={pageChangeHandle}/>

          <div className={"desc"}>
            第 {startCount} – {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )
    }
  </EntirePageNationWrapper>;
}

export default EntirePageNation;