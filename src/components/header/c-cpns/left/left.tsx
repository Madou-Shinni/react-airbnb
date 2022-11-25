import React from "react"
import {LeftWrapper} from "./style"
import IconLogo from "@/assets/svg/icon_logo";
import {useNavigate} from "react-router-dom";

const Left: React.FC = () => {
  const navigate = useNavigate()
  const logoClickHandle = () => {
    navigate("/home")
  }

  return <LeftWrapper>
    <div className={"logo"} onClick={logoClickHandle}>
      <IconLogo />
    </div>
  </LeftWrapper>;
}

export default Left;