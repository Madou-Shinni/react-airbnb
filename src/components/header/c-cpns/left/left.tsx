import React from "react"
import {LeftWrapper} from "./style"
import IconLogo from "@/assets/svg/icon_logo";

const Left: React.FC = () => {
  return <LeftWrapper>
    <div className={"logo"}>
      <IconLogo />
    </div>
  </LeftWrapper>;
}

export default Left;