import React, { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [auxProducts, setAuxProducts] = useState([]); 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
      setAuxProducts(resp.data)
    });
  }, []);

  function filterByMen(arrayProducts){
      var arrayFilterMen = []
      for(let i=0; i<arrayProducts.length; i++ ){
          if((arrayProducts[i].category === "men's clothing")){
            arrayFilterMen.push(arrayProducts[i])
          }
      }
      setProducts(arrayFilterMen)
  }

  return (
    <div>
      <Header
        filtrarPrecio={() => {
          const copyArray = auxProducts.slice().sort((a, b) => a.price - b.price)
          setProducts(copyArray);
        }}
         //  setProducts( auxProducts.filter((product) => product.category === "men's clothing"));
        filtrarHombre={ () =>
          filterByMen(auxProducts)
        }

        filtrarMujer={()=>{
          setProducts(auxProducts.filter((products)=>products.category === "women's clothing" ))
        }}

        filtrarValoracion={()=>{
          const copyArray = auxProducts.slice().sort((a,b) => b.rating.rate -  a.rating.rate)
          setProducts(copyArray)
        }}

        onSearchInput={(searched)=>{
          const copyArray = auxProducts.filter((product) => product.title.toLowerCase().includes(searched.toLowerCase()))
          setProducts(copyArray)
        }}
      />
      
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 w-full py-36">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            rate={product.rating.rate}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
