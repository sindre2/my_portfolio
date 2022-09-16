import { useEffect, useState } from "react";

export function CatFactUseEffect() {
  const [web, setWeb] = useState();

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((info) => {
        setWeb(info.data);
      });
  }, []);

  if (web) {
    return (
      <>
        {web.map((item, idx) => {
          return <h3 key={idx}>{item.fact}</h3>;
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>No facts yet</h3>
      </>
    );
  }
}
