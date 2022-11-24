import React from "react"
import RoomItem from "@/components/room-item/RoomItem";
import {SectionRoomsWrapper} from "@/components/section-rooms/style";

type Props = {
  roomList: []
  itemWidth?:string
}

const SectionRooms: React.FC<Props> = (props) => {
  const { roomList = [],itemWidth } = props

  return <SectionRoomsWrapper className={"room-list"}>
    {
      roomList?.slice(0,8)?.map((v:any)=>(
        <RoomItem itemData={v} itemWidth={itemWidth} key={v.id} />
      ))
    }
  </SectionRoomsWrapper>;
}

export default SectionRooms;