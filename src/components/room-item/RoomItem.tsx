import React from "react"
import {RoomItemWrapper} from "./style"

type Props = {
  itemData: {
    name: string
  }
}

const RoomItem: React.FC<Props> = (props) => {
  const { itemData } = props
  return <RoomItemWrapper>
    {itemData.name}
  </RoomItemWrapper>;
}

export default RoomItem;