import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > div {
    text-align: left;
    margin: 8px 0 15px;
  }

  > p {
    width: 100%;
    height: 44px;

    // Controle sobre a quebra de texto
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    //

    font-size: 16px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
  }
`;
