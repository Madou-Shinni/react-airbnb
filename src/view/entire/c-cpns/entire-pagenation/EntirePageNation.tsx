import React from "react"
import Pagination from '@mui/material/Pagination';

import { EntirePageNationWrapper } from "./style";
import {useSelector} from "react-redux";

type Props = {}

const EntirePageNation: React.FC<Props> = (props) => {
  const {totalCount,currentPage,roomList} = useSelector((state:any) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 +1
  const endCount = (currentPage + 1) * 20

  return <EntirePageNationWrapper>
    {/* !! 转为boolean */}
    {
      !!roomList.length &&
      (
        <div className={"info"}>
          <Pagination count={totalPage}/>

          <div className={"desc"}>
            第 {startCount} – {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )
    }
  </EntirePageNationWrapper>;
}

export default EntirePageNation;