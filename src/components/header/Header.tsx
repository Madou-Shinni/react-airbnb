import React from "react"
import {HeaderWrapper} from "@/components/header/style";
import Left from "@/components/header/left/left";
import Right from "@/components/header/right/right";
import Center from "@/components/header/center/center";

const Header: React.FC = () => {
  return <HeaderWrapper>
    <Left />
    <Center />
    <Right />
  </HeaderWrapper>;
}

export default Header;