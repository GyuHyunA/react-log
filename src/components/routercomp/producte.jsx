import React from "react";
import products from "./dummy";
import { Link } from "react-router-dom";

const Producte = () => {
  return (
    <>
      <h2>Producte</h2>
      <div>
        {products.map((v) => {
          return (
            <article key={v.id}>
              <h2>{v.name}</h2>
              <Link to={`${v.id}`}>More Info</Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Producte;
