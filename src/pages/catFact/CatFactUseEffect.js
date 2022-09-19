import axios from "axios";
import { useEffect, useState } from "react";

export function CatFactUseEffect() {
  const [web, setWeb] = useState();

  useEffect(() => {
    axios.get("https://catfact.ninja/facts").then((info) => {
      setWeb(info.data.data);
      console.log(info);
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
