import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector(state => state.cart.items);

  return (
    <main>
      <h1>{items.length}</h1>
      <h2>Home</h2>
      <p>Que ondiux</p>
    </main>
  );
}
