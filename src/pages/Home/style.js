import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px 128px auto;
  grid-template-areas: 
  "header"
  "subtitle"
  "content";

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > section {
    grid-area: subtitle;
    padding: 50px 64px 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 207px;
      padding: 16px 32px;
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  > section:first-child {
    margin-top: 40px;
  }

  > section {
    margin: 0 0 24px;
  }

  > section button {
    background: rgba(255, 133, 155, 0.05);
  }
`;

export const NewNote = styled(Link)`
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`;
