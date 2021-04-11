import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setCustomers(json));
  }, []);

  const [filter, setFilter] = useState("");

  function szur(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <h1>Customers</h1>
      <p>
        <Link to="/">Products</Link>
      </p>
      <input type="text" value={filter} onChange={szur} />
      <ul>
        {customers
          .filter(
            (c) =>
              c.name.firstname.includes(filter) ||
              c.name.lastname.includes(filter)
          )
          .map((c) => (
            <li key={c.id}>{c.name.firstname + " " + c.name.lastname}</li>
          ))}
      </ul>
    </div>
  );
}

export default Customers;
