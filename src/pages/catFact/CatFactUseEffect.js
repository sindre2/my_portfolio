import { useEffect, useState } from "react";

export function CatFactUseEffect() {
  const [web, setWeb] = useState("Hello");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        setWeb(info.data);
      });
  }, [count]);

  if(info.data)
  {

    return (
      <>
        <h3>{web[Math.floor(Math.random() * web.length)].fact}</h3>
      </>
    )
  }

  const timer = () => {
    setTimeout(() => {
      setCount((count) => count++);
    }, 4000);
  };
}
