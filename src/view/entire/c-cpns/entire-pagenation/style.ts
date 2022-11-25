import styled from "styled-components";

export const EntirePageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .info {
    .MuiPaginationItem-page:hover {
      text-decoration: underline;
    }
    /* 覆盖mui样式,同时满足 */
    .MuiPaginationItem-page.Mui-selected {
      background-color: rgb(34, 34, 34);
      color: #fff;
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .desc {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`