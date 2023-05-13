import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 200px;
  border: none;
  padding: 25px;
  position: absolute;
  top: 595px;
  background-color: ${({ theme }) => theme.colors.neonGreen};
  transition: 1s;

  &:hover {
    box-shadow: -1px 10px 105px 7px rgba(0, 255, 150, 0.86);
  }
`;

const StyledImage = styled.img`
  width: 30px;
`;

export { StyledButton, StyledImage };
