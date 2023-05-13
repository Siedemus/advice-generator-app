import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 200px;
  border: none;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.neonGreen};
  transform: translateY(90%);
  transition: 1s;

  &:hover {
    box-shadow: -1px 10px 105px 7px rgba(0, 255, 150, 0.86);
  }
`;

const StyledImage = styled.img`
  width: 20px;
`;

export { StyledButton, StyledImage };
