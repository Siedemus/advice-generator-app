import { StyledLink, StyledFooter } from "./styled";

export const Footer = () => (
  <StyledFooter>
    Challenge by{" "}
    <StyledLink
      href="https://www.frontendmentor.io/home"
      target="_blank"
      rel="noreferrer"
    >
      Frontend Mentor
    </StyledLink>
    . Coded by{" "}
    <StyledLink
      href="https://github.com/Siedemus"
      target="_blank"
      rel="noreferrer"
    >
      Siedemus
    </StyledLink>
    .
  </StyledFooter>
);
