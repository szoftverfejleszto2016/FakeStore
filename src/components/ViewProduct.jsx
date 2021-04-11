import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewProduct() {
  const [id, setId] = useState(1);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: ""
  });

  useEffect(
    function () {
      fetch("https://fakestoreapi.com/products/" + id)
        .then((res) => res.json())
        .then((json) =>
          setProduct({
            title: json.title,
            description: json.description,
            price: json.price,
            image: json.image
          })
        );
    },
    [id]
  );

  function kov() {
    if (id < 20) setId(id + 1);
  }

  function elozo() {
    if (id > 1) setId(id - 1);
  }

  return (
    <div>
      <h1>Products</h1>
      <p>
        <Link to="/Customers">Customers</Link>
      </p>
      <button onClick={elozo}>Previous</button>
      <button onClick={kov}>Next</button>
      <h3>{product.title}</h3>
      <h4>$ {product.price}</h4>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} height={300} />
    </div>
  );
}

export default ViewProduct;
