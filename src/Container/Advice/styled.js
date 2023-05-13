import styled from "styled-components";

const AdviceHeader = styled.h1`
  color: ${({ theme }) => theme.colors.neonGreen};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 20px;
`;

const StyledAdvice = styled.p`
  color: ${({ theme }) => theme.colors.lightCyan};
  font-size: 28px;
  padding: 20px 20px 40px 20px;
  font-weight: 800;
  text-align: center;
`;

const BorderImage = styled.img``;

export { AdviceHeader, StyledAdvice, BorderImage };
