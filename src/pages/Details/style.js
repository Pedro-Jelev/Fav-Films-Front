import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display:grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

    & div a.return{
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;


export const Links = styled.ul`
  list-style: none;

  > li{
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

`;

export const Content = styled.div`
  max-width: 1138px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child{
    align-self: flex-end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0;
  }

  > p {
    font-size: 16px;
    font-weight: 16px;
    text-align: justify;
    margin-top: 12px;
  }

  > .middle {
    display: flex;
    gap: 19px;
    align-items: center;

    margin: 24px 0;
  }

  > div.middle:nth-child(3) {
    gap: 8px;
    margin-bottom: 12px;

    img {
      width: 16px;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
