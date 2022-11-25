import React from "react"
import { EntireWrapper } from "./style";
import EntireFilter from "@/view/entire/c-cpns/entire-filter/EntireFilter";
import EntireRooms from "@/view/entire/c-cpns/entire-rooms/EntireRooms";
import EntirePageNation from "@/view/entire/c-cpns/entire-pagenation/EntirePageNation";

const Entire: React.FC = () => {
  return <EntireWrapper>
    <EntireFilter />
    <EntireRooms />
    <EntirePageNation />
  </EntireWrapper>;
}

export default Entire;