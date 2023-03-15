import styled from "styled-components";

export const AdCoTeStyle = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  .title {
    margin-bottom: 10px;
  }
  .input-contain {
    width: 100%;
    margin-bottom: 30px;
    .in-title {
      width: 100%;
      height: 30px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      padding: 0 10px;
    }
    .text-area {
      width: 100%;
      border: none;
      margin-bottom: 10px;
      resize: none;
      padding: 10px;
      &:focus {
        outline: none;
      }
    }
  }
  .con-contain {
    width: 100%;
    border-top: 1px solid #9a9a9a67;
    h1 {
      margin: 10px 0;
    }
    .list-wrap {
      width: 100%;
      height: 70px;
      background-color: white;
      border-radius: 10px;
      border-bottom: 1px solid #9a9a9a67;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 30px;
      padding-right: 100px;
      .list-box {
        display: flex;
        align-items: center;
        p {
          margin-right: 10px;
          font-weight: 700;
          border-right: 1px solid black;
          padding-right: 10px;
        }
      }
    }
  }
`;
