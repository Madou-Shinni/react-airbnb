import React, {useEffect} from "react"
import { EntireWrapper } from "./style";
import EntireFilter from "@/view/entire/c-cpns/entire-filter/EntireFilter";
import EntireRooms from "@/view/entire/c-cpns/entire-rooms/EntireRooms";
import EntirePageNation from "@/view/entire/c-cpns/entire-pagenation/EntirePageNation";
import {useDispatch} from "react-redux";
import {fetchEntireDataAction} from "@/store/modules/entire";
import Header from "@/components/header/Header";

const Entire: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction())
  },[dispatch])

  return <EntireWrapper>
    <Header />
    <EntireFilter />
    <EntireRooms />
    <EntirePageNation />
  </EntireWrapper>;
}

export default Entire;