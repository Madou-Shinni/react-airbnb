import React, {useEffect, useState} from "react"
import {RightWrapper} from "./style"
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/IconAvatar";

const Right: React.FC = () => {
  const [showPanel,setShowPanel] = useState(false)

  function profileHandleClick() {
    setShowPanel(true)
  }

  /* 副作用hooks */
  useEffect(()=>{
    function windowsHandleClick() {
      setShowPanel(false)
    }
    /* 监听窗口点击 true:设置捕获 */
    window.addEventListener("click",windowsHandleClick,true)

    /* 取消监听 */
    return () => {
      window.removeEventListener("click",windowsHandleClick,true)
    }
  },[])

  return <RightWrapper>
    <div className={"btns"}>
      <span className={"btn"}>登录</span>
      <span className={"btn"}>注册</span>
      <span className={"btn"}>
        <IconGlobal />
      </span>
    </div>

    <div className={"profile"} onClick={profileHandleClick}>
      <IconMenu />
      <IconAvatar />

      { showPanel && (<div className={"panel"}>
        <div className={"top"}>
          <div className={"item register"}>注册</div>
          <div className={"item login"}>登录</div>
        </div>
        <div className={"bottom"}>
          <div className={"item"}>出租房源</div>
          <div className={"item"}>开展体验</div>
          <div className={"item"}>帮助</div>
        </div>
      </div>)}
    </div>
  </RightWrapper>;
}

export default Right;