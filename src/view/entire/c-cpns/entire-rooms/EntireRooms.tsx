import React from "react"
import { EntireRoomsWrapper } from "./style";
import {useSelector} from "react-redux";
import RoomItem from "@/components/room-item/RoomItem";

type Props = {}

const EntireRooms: React.FC<Props> = (props) => {
  /* 从redux中获取roomList数据 */
  const { roomList ,totalCount } = useSelector((state:any) => ({
    roomList : state.entire.roomList,
    totalCount : state.entire.totalCount
  }))
  return <EntireRoomsWrapper>
    <h2 className={"title"}>共 处住所</h2>
    <div className={"list"}>
      {
        roomList?.map((item:any) => (
          <RoomItem itemData={item} itemWidth={"20%"} key={item.id}/>
        ))
      }
    </div>
  </EntireRoomsWrapper>;
}

export default EntireRooms;