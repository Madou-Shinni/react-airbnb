import React, {Ref, useEffect, useRef, useState} from "react"
import { ScrollViewWrapper } from "./style";

type Props = {
  children?: any
}

const ScrollView: React.FC<Props> = (props) => {
  const [showRightBtn, setShowRightBtn] = useState(false)

  /* 获取dom节点 */
  const scrollContentRef:Ref<any> = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    setShowRightBtn(totalDistance > 0)
  },[props.children])

  return <ScrollViewWrapper>
    <div>左按钮</div>
    { showRightBtn && <div>有按钮</div>}

    <div className={"scroll-content"} ref={scrollContentRef}>
      {props.children}
    </div>
  </ScrollViewWrapper>;
}

export default ScrollView;