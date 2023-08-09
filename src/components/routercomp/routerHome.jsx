import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Aboute from "./aboute";
import Producte from "./producte";
import ProductSingle from "./productSingle";

const CompStyle = styled.div`
  nav {
    margin-bottom: 10px;
    .btn {
      padding: 5px 10px;
      background-color: lightcoral;
      border-radius: 3px;
      margin-right: 10px;
      &:active {
        color: white;
        filter: brightness(1.2);
      }
    }
  }
`;

const RouterHome = () => {
  const [user, setUser] = useState(null)
  return (
    <CompStyle>
      <nav>
        <Link to="hi" className="btn">
          HI
        </Link>
        <Link to="aboute" className="btn">
          about
        </Link>
        <Link to="products" className="btn">
          products
        </Link>
      </nav>
      {/*  */}
      <Routes>
        <Route path="hi" element={<div>HIHI</div>} />
        <Route path="aboute" element={<Aboute />} />
        <Route path="products" element={<Producte />} />
        <Route path="products/:productId" element={<ProductSingle />} />
      </Routes>
      <Outlet />
    </CompStyle>
  );
};

export default RouterHome;
