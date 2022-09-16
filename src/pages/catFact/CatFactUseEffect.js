import { useEffect, useState } from "react";

export function CatFactUseEffect() {
  const [web, setWeb] = useState("Hello");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((info) => {
        setWeb(info.data);
        console.log(info);
          return (
            <>
              <h3>{web[0].fact}</h3>
            </>
          );
      });
  }, [count]);

  setTimeout(() => {
    setCount((count) => count + 1);
  }, 4000);
}
