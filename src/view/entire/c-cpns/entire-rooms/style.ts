import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  padding: 70px 20px;
  
  .title {
    font-size: 20px;
    font-weight: 700;
    color: #222;
    margin: 70px 0 10px 10px;
  }
  
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`