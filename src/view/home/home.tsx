import React from "react"
import {HomeWrapper} from "./style"
import Bannner from "@/view/home/c-cpns/banner/bannner";

const Home: React.FC = () => {
  return <HomeWrapper>
    <Bannner />
    <div className={"content"}>
      content
    </div>
  </HomeWrapper>;
}
export default Home;