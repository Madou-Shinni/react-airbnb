import React from "react"
import RoomItem from "@/components/room-item/RoomItem";
import {SectionRoomsWrapper} from "@/components/section-rooms/style";

type Props = {
  roomList: []
}

const SectionRooms: React.FC<Props> = (props) => {
  const { roomList = [] } = props

  return <SectionRoomsWrapper className={"room-list"}>
    {
      roomList?.slice(0,8)?.map((v:any)=>(
        <RoomItem itemData={v} key={v.id} />
      ))
    }
  </SectionRoomsWrapper>;
}

export default SectionRooms;