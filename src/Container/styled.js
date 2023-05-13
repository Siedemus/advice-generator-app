import styled, { css } from "styled-components";

export const StyledContainer = styled.main`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  max-width: 550px;
  border-radius: 15px;
  margin: 100px 15px;

  ${({ loading }) =>
    loading &&
    css`
      min-width: 300px;
      min-height: 300px;
    `}
`;
