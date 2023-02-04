import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";

const API_URL =
  "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";

export default function ProductDetails() {
  const [data, setData] = useState([]);

  console.clear();
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
  
  const { productId } = useParams();

  const getData = (products, productId) => {
    return products.find((product) => product.user_id === productId);
  };

  const itemData = getData(data, productId);

  return <SingleProductCard itemData={itemData}  />;
}
