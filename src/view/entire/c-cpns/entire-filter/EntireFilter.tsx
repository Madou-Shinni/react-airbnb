import React, {useState} from "react"
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames";

type Props = {}

const EntireFilter: React.FC<Props> = (props) => {
  const [selectItems, setSelectItems] = useState<any>([])

  const itemClickHandle = (item:any) => {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      // 如果当前选中项 已经被选中则移除
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex,1)
    }else {
      // 没被选中 则加入
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return <EntireFilterWrapper>
    <div className={"filter"}>
      {
        filterData.map((v,i) => (
          <div
            className={classNames("item",{active: selectItems.includes(v)})}
            key={i}
            onClick={e => itemClickHandle(v)}
          >
            {v}
          </div>
        ))
      }
    </div>
  </EntireFilterWrapper>;
}

export default EntireFilter;