import React from "react"
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/IconMoreArrow";
import {useNavigate} from "react-router-dom";

type Props = {
  name?: string
}

const SectionFooter: React.FC<Props> = (props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  /** 事件处理的逻辑 */
  const navigate = useNavigate()
  const moreClickHandle = () => {
    navigate("/entire")
  }

  return <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
    <div className={"info"} onClick={moreClickHandle}>
      <span className={"text"}>{showMessage}</span>
      <IconMoreArrow />
    </div>
  </SectionFooterWrapper>;
}

export default SectionFooter;