import styled from "styled-components";
import {  popularProducts } from "../Data";
import Product from "./Product";
import { useEffect,useState } from "react";

import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,Sort}) => {
  // console.log(cat,filters,Sort)
  const [products, setproducts] = useState([])
  const [filteredproduct, setfilteredproduct] = useState([])


  // now we are going to fetch api 
  useEffect(() => {
    const getProduct=async()=>{
      try {
        const res=await axios.get(cat?`http://localhost:5000/api/product?category=${cat}`:"http://localhost:5000/api/product");
        // console.log(res)
        setproducts(res.data)
        
      } catch (error) {
        
      }
    }
    getProduct()
    
  }, [cat])
  useEffect(() => {
    cat &&
      setfilteredproduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  
  useEffect(() => {
    if (Sort === "newest") {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (Sort === "asc") {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [Sort]);
  



 
  return (
    <Container>
      {cat?filteredproduct.map((item) => (
        <Product item={item} key={item._id} />
      )) :products.slice(0,8).map((item) => (
        <Product item={item} key={item._id} />
      )) }
    </Container>
  );
};

export default Products;