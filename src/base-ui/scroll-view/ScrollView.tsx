import React, {Ref, useEffect, useRef, useState} from "react"
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/IconArrowLeft";
import IconArrowRight from "@/assets/svg/IconArrowRight";

type Props = {
  children?: any
}

const ScrollView: React.FC<Props> = (props) => {
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [positionIndex, setPositionIndex] = useState(0)

  /* 获取dom节点 */
  const scrollContentRef = useRef<any>()
  const totalDistanceRef = useRef<number>(0)

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth // 可以滚动的距离
    totalDistanceRef.current = totalDistance /* 记录下可以滚动的距离 */
    setShowRightBtn(totalDistance > 0)
  },[props.children])

  /* 点击事件处理函数 */
  const ClickHandle = (isRight:boolean) => {
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1 /* 当前索引 */
    const newElement = scrollContentRef.current.children[newIndex] /* 当前项 */
    const newOffsetLef = newElement.offsetLeft /* 当前项距离父元素(需要定位!)右边的偏移量 */
    scrollContentRef.current.style.transform = `translate(-${newOffsetLef}px)` /* 移动 */
    setPositionIndex(newIndex) /* 记录最新的索引 */
    /* 是否继续显示右侧的按钮 */
    /* 可滚动的距离 > 当前项距离父元素的偏移量 才可以滚动 */
    setShowRightBtn(totalDistanceRef.current > newOffsetLef)
    setShowLeftBtn(newOffsetLef > 0)
  }

  return <ScrollViewWrapper>
    { showLeftBtn && <div className={"control left"} onClick={e => ClickHandle(false)}><IconArrowLeft /></div>}
    { showRightBtn && <div className={"control right"} onClick={e => ClickHandle(true)}><IconArrowRight /></div>}

    <div className={"scroll"}>
      <div className={"scroll-content"} ref={scrollContentRef}>
        {props.children}
      </div>
    </div>
  </ScrollViewWrapper>;
}

export default ScrollView;