import React from "react"
import { EntireRoomsWrapper } from "./style";
import {shallowEqual, useSelector} from "react-redux";
import RoomItem from "@/components/room-item/RoomItem";

type Props = {}

const EntireRooms: React.FC<Props> = (props) => {
  /* 从redux中获取roomList数据 */
  const { roomList ,totalCount, isLoading } = useSelector((state:any) => ({
    roomList : state.entire.roomList,
    totalCount : state.entire.totalCount,
    isLoading: state.entire.isLoading
  }),shallowEqual)
  return <EntireRoomsWrapper>
    <h2 className={"title"}>共 {totalCount} 处住所</h2>
    <div className={"list"}>
      {
        roomList?.map((item:any) => (
          <RoomItem itemData={item} itemWidth={"20%"} key={item.id}/>
        ))
      }
    </div>
    {/* 遮盖蒙版 */}
    {isLoading && <div className={"cover"}></div>}
  </EntireRoomsWrapper>;
}

export default EntireRooms;