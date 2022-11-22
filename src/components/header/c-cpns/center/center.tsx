import React from "react"
import {CenterWrapper} from "./style"
import IconSearchBar from "@/assets/svg/IconSearchBar";

const Center: React.FC = () => {
  return <CenterWrapper>
    <div className={"search-bar"}>
      <div className={"text"}>
        搜索房源和体验
      </div>
      <span className={"icon"}>
      <IconSearchBar />
    </span>
    </div>
  </CenterWrapper>;
}

export default Center;