import { useState } from "react";
import axios from "axios";

export function CatFactUseState() {
  const [old, setData] = useState("Hello");

  async function newFact() {
    const response = await axios("https://catfact.ninja/facts");
    console.log(response);
    setData(response.data.data);
  }
  return (
    <>
      <button onClick={newFact}>Fact Me!!!</button>
      <h3>{old[Math.floor(Math.random() * old.length)].fact}</h3>
    </>
  );
}
