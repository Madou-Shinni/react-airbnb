import React from "react"
import {RoomItemWrapper} from "./style"

type Props = {
  itemData: {
    name: string
    picture_url:string
    verify_info:{
      messages:[]
      text_color:string
    }
    price: number
  }
}

const RoomItem: React.FC<Props> = (props) => {
  const { itemData } = props
  return <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
    <div className={"inner"}>
      <div className={"cover"}>
        <img src={itemData.picture_url} alt=""/>
      </div>
      <div className={"desc"}>
        {itemData.verify_info.messages.join(".")}
      </div>
      <div className={"name"}>{itemData.name}</div>
      <div className={"price"}>¥{itemData.price}</div>
    </div>
  </RoomItemWrapper>;
}

export default RoomItem;