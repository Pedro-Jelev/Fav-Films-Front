import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 105px auto;
 grid-template-areas:
 "header"
 "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    .middle {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }

    .middle button:first-child {
      background: #0D0C0F;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > form textArea {
      height: 274px;
      margin-bottom: 12px;
    }
  }

  .tags{
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    margin-top: 24px;
    border-radius: 8px;
    padding: 16px;
    background: #0D0C0F;

    div {
      width: 256px;
    }
 }
`;

export const Form = styled.form`
  max-width: 1138px;
  margin: 38px auto;

  > header{
    margin-bottom: 40px;
  }

  a {
      display: flex;
      align-items: center;
      gap: 8px;

      margin-bottom: 24px;

      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
