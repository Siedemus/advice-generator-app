import { AdviceHeader, StyledAdvice, BorderImage } from "./styled";
import desktopImage from "../../Assets/Images/pattern-divider-desktop.svg";
import { ClimbingBoxLoader } from "react-spinners";

export const Advice = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <AdviceHeader>Advice #{data.id}</AdviceHeader>
          <StyledAdvice>{data.advice}</StyledAdvice>
          <BorderImage src={desktopImage}></BorderImage>
        </>
      ) : (
        <ClimbingBoxLoader color="#52ffa8" size={30} />
      )}
    </>
  );
};
