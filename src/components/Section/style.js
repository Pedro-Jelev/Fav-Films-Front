import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
  }
`;