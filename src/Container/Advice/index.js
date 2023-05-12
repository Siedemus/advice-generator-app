import { AdviceHeader, StyledAdvice, BorderImage } from "./styled";
import desktopImage from "../../Assets/Images/pattern-divider-desktop.svg"

export const Advice = () => {
    return (
        <>
        <AdviceHeader>Advice #1337</AdviceHeader>
        <StyledAdvice>"It is easy to sit up and take notice, what's difficult is getting up and taking action.</StyledAdvice>
        <BorderImage src={desktopImage}></BorderImage>
        </>
    );
};