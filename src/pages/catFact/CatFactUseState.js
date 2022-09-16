import { useState } from "react";

export function CatFactUseState() {
  const [old, setData] = useState("Hello");

  async function newFact() {
    const response = await (await fetch("https://catfact.ninja/facts")).json();
    console.log(response);
    setData(response.data);
  }
  return (
    <>
      <button onClick={newFact}>Fact Me!!!</button>
      <h3>{old[Math.floor(Math.random() * old.length)].fact}</h3>
    </>
  );
}
