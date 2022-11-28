import React from "react"
import { PictureWrapper } from "./style";
import {useSelector} from "react-redux";

type Props = {}

const Picture: React.FC<Props> = (props) => {
  const { detailInfo } = useSelector((state:any) => ({
    detailInfo: state.detail.detailInfo
  }))

  return <PictureWrapper>
    <div className={"pictures"}>
      <div className={"left"}>
        <div className={"item"}>
          <img src={detailInfo?.picture_urls?.[0]} alt=""/>
          <div className={"cover"}></div>
        </div>
      </div>

      <div className={"right"}>
        {
          detailInfo?.picture_urls?.slice(1,5).map((item:any,i:number) => (
            <div className={"item"} key={i}>
              <img src={item} alt=""/>
              <div className={"cover"}></div>
            </div>
          ))
        }
      </div>
    </div>
  </PictureWrapper>;
}

export default Picture;