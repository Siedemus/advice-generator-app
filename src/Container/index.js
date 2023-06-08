import { useState } from "react";
import { Advice } from "./Advice";
import { Button } from "./Button";
import { AdviceContainer, LoadinContainer } from "./styled";
import { useFetchAdvice } from "./useFetchAdvice";
import { PacmanLoader as Loader } from "react-spinners";

export const Container = () => {
  const [trigger, setTrigger] = useState(false);
  const data = useFetchAdvice(trigger);

  const isData = data ? false : true;

  return (
    <>
      {data ? (
        <AdviceContainer loading={+isData}>
          <Advice data={data} />
          <Button setTrigger={setTrigger} />
        </AdviceContainer>
      ) : (
        <LoadinContainer>
          <Loader color="#52ffa8" size={30} />
        </LoadinContainer>
      )}
    </>
  );
};
