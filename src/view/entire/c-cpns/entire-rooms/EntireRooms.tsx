import React, {useCallback} from "react"
import { EntireRoomsWrapper } from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import RoomItem from "@/components/room-item/RoomItem";
import {useNavigate} from "react-router-dom";
import {changeDetailInfo} from "@/store/modules/detail";

type Props = {}

const EntireRooms: React.FC<Props> = (props) => {
  /* 从redux中获取roomList数据 */
  const { roomList ,totalCount, isLoading } = useSelector((state:any) => ({
    roomList : state.entire.roomList,
    totalCount : state.entire.totalCount,
    isLoading: state.entire.isLoading
  }),shallowEqual)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  /* 事件处理 */
  const itemClickHandle = useCallback((item:any) => {
    dispatch(changeDetailInfo(item))
    navigate("/detail")
  },[navigate])

  return <EntireRoomsWrapper>
    <h2 className={"title"}>共 {totalCount} 处住所</h2>
    <div className={"list"}>
      {
        roomList?.map((item:any) => (
          <RoomItem
            itemData={item}
            itemWidth={"20%"}
            key={item.id}
            itemClick={itemClickHandle}
          />
        ))
      }
    </div>
    {/* 遮盖蒙版 */}
    {isLoading && <div className={"cover"}></div>}
  </EntireRoomsWrapper>;
}

export default EntireRooms;