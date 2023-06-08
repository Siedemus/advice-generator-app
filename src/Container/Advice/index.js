import { AdviceHeader, StyledAdvice, BorderImage } from "./styled";
import desktopImage from "../../Assets/Images/pattern-divider-desktop.svg";

export const Advice = ({ data }) => {
  return (
    <>
      <AdviceHeader>Advice #{data.id}</AdviceHeader>
      <StyledAdvice>{data.advice}</StyledAdvice>
      <BorderImage src={desktopImage}></BorderImage>
    </>
  );
};
