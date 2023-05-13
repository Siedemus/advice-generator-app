import { StyledButton, StyledImage } from "./styled";
import diceImage from "../../Assets/Images/icon-dice.svg";

export const Button = ({ setTrigger }) => {
  const onButtonClick = () => {
    setTrigger((trigger) => !trigger);
  };

  return (
    <StyledButton onClick={onButtonClick}>
      <StyledImage src={diceImage}></StyledImage>
    </StyledButton>
  );
};
