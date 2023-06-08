import styled, { css } from "styled-components";

const AdviceContainer = styled.main`
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

const LoadinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;
export { LoadinContainer, AdviceContainer };
