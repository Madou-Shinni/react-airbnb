import React from "react"

import {SectionHeaderWrapper} from "./style"

/* 类型验证 */
type Props = {
  title: string,
  subtitle: string,
}

const SectionHeader: React.FC<Props> = (props) => {
  const { title, subtitle = ""} = props

  return <SectionHeaderWrapper>
    {title &&  <h2 className={"title"}>{title}</h2>}
    {subtitle && <h2 className={"subtitle"}>{subtitle}</h2>}
  </SectionHeaderWrapper>;
}


export default SectionHeader;