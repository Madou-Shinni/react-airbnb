import React, {useEffect} from "react"
import { DetailWrapper } from "./style";
import Picture from "@/view/detail/c-cpns/pictures/pictures";
import Header from "@/components/header/Header";
import {useDispatch} from "react-redux";
import {changeHeaderConfig} from "@/store/modules/main";

const Detail: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfig({isFixed:false}))
  },[dispatch])

  return <DetailWrapper>
    <Picture />
  </DetailWrapper>;
}

export default Detail;