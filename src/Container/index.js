import { Advice } from "./Advice";
import { Button } from "./Button";
import { StyledContainer } from "./styled";

export const Container = () => {
  return (
    <>
      <StyledContainer>
        <Advice />
        <Button />
      </StyledContainer>
    </>
  );
};
