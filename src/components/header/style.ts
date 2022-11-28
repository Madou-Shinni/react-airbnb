import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .content {
    padding: 0 30px;
    position: relative;
    z-index: 99;
    background-color: #fff;

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    
    .search-area {
      height: 100px;
    }
  }
  
  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
`