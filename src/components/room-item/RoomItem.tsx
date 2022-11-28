import React, {useRef} from "react"
import Slider from "react-slick";
import {RoomItemWrapper} from "./style"
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/assets/svg/IconArrowLeft";
import IconArrowRight from "@/assets/svg/IconArrowRight";

type Props = {
  itemData: {
    name: string
    picture_url:string
    picture_urls:[]
    verify_info:{
      messages:[]
      text_color:string
    }
    price: number
    star_rating: number
    reviews_count:number
    bottom_info: {
      content:string
      content_color: string
    }
  }

  itemWidth?:string
}

const settings = {
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

const RoomItem: React.FC<Props> = (props) => {
  const { itemData,itemWidth } = props
  const sliderRef = useRef<any>()

  const onclickHandle = (isRight = false) => {
    isRight ? sliderRef.current.slickNext() : sliderRef.current.slickPrev()
  }

  return <RoomItemWrapper
    verifyColor={itemData?.verify_info?.text_color || "#39576a"}
    bottomInfoColor={itemData?.bottom_info?.content_color || "#39576a"}
    itemWidth={itemWidth}
  >
    <div className={"inner"}>
      {/*<div className={"cover"}>
        <img src={itemData.picture_url} alt=""/>
      </div>*/}
      <div className={"swiper"}>
        <div className={"control"}>
          <div className={"left btn"} onClick={e => onclickHandle(false)}>
            <IconArrowLeft width={"30"} height={"30"} />
          </div>
          <div className={"right btn"} onClick={e => onclickHandle(true)}>
            <IconArrowRight width={"30"} height={"30"} />
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {
            itemData?.picture_urls?.map((v,i) => (
              <div className={"cover"} key={i}>
                <img src={v} alt=""/>
              </div>
            ))
          }
        </Slider>
      </div>

      <div className={"desc"}>
        {itemData.verify_info.messages.join(".")}
      </div>
      <div className={"name"}>{itemData.name}</div>
      <div className={"price"}>¥{itemData.price}</div>
      <div className={"bottom"}>
        <Rating name="read-only"
                /*?? 代表undefined的时候才显示 5 */
                value={itemData.star_rating ?? 5}
                precision={0.5}
                sx={{color:"#00848A",fontSize:"12px"}}
                readOnly />
        <span className={"count"}>{itemData.reviews_count}</span>
        {
          itemData.bottom_info && <span className={"extra"}>·{itemData?.bottom_info?.content}</span>
        }
      </div>
    </div>
  </RoomItemWrapper>;
}

export default RoomItem;