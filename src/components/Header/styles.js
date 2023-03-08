import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0 80px;

  > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  > .head-search{
    width: 630px;
    height: 56px;
    margin: 0;
  }
`;

export const Profile = styled.div`
  display:flex;
  align-items:center;
  width: 165px;

  > a img{
    width:56px;
    height:56px;
    border-radius:50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 18px;
    align-items: flex-end;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`;