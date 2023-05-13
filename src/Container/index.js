import { useState } from "react";
import { Advice } from "./Advice";
import { Button } from "./Button";
import { StyledContainer } from "./styled";
import { useFetchAdvice } from "./useFetchAdvice";

export const Container = () => {
  const [trigger, setTrigger] = useState(false);
  const data = useFetchAdvice(trigger);

  const isDataFalse = data ? false : true;

  return (
    <>
      <StyledContainer loading={isDataFalse}>
        <Advice data={data}/>
        <Button setTrigger={setTrigger} />
      </StyledContainer>
    </>
  );
};
