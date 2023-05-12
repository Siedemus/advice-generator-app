import { StyledButton, StyledImage } from "./styled";
import diceImage from "../../Assets/Images/icon-dice.svg";

export const Button = () => {
  return (
    <StyledButton>
      <StyledImage src={diceImage}></StyledImage>
    </StyledButton>
  );
};
