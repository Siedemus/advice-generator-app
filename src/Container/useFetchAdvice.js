import { useEffect, useState } from "react";

export const useFetchAdvice = (trigger) => {
  const [data, setdata] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error();
      }

      const jsonData = await response.json();
      const { slip } = jsonData;
      setdata(slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

  return data;
};
