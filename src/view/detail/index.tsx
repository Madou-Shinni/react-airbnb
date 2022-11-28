import React from "react"
import { DetailWrapper } from "./style";
import {useSelector} from "react-redux";
import detail from "@/store/modules/detail";

const Detail: React.FC = () => {
  const {detailInfo} = useSelector((state:any) => ({
    detailInfo: state.detail.detailInfo
  }))

  return <DetailWrapper>{detailInfo.name}</DetailWrapper>;
}

export default Detail;