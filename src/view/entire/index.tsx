import React, {useEffect} from "react"
import { EntireWrapper } from "./style";
import EntireFilter from "@/view/entire/c-cpns/entire-filter/EntireFilter";
import EntireRooms from "@/view/entire/c-cpns/entire-rooms/EntireRooms";
import EntirePageNation from "@/view/entire/c-cpns/entire-pagenation/EntirePageNation";
import {useDispatch} from "react-redux";
import {fetchEntireDataAction} from "@/store/modules/entire";
import Header from "@/components/header/Header";
import {changeHeaderConfig} from "@/store/modules/main";

const Entire: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfig({isFixed: true}))
  },[dispatch])

  return <EntireWrapper>
    <EntireFilter />
    <EntireRooms />
    <EntirePageNation />
  </EntireWrapper>;
}

export default Entire;