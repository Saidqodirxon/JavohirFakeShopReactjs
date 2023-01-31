import React, { useState, useEffect } from "react";
import Product from "./Product";

const About = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [count]);

  return (
    <div className="text-center h-50">
      <h1>👍 Start  👇</h1>
      <div>
        <button className="btn btn-success" onClick={handleIncrease}>
          +
        </button>
        {count}
        <button className="btn btn-success" onClick={handleDecrease}>
          -
        </button>
         </div>
      <div className="phone"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          columnGap: "15px",
        }}
      >
        {items.map((item, more) => (
          <Product product={item} key={more} />
        ))}
      </div>
      <h1 className="display-1">😂 THE END 😎</h1>
    </div>
  );
};

export default About;
