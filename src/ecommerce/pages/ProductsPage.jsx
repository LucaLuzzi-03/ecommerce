import { useEffect, useState } from "react"
import { getllProducts } from "../helpers/getAllProducts"
import { ProductCard } from "../components/ProductCard"

import "./styles/productsPage.css"

export const ProductsPage = () => {

  const [products, setProducts] = useState([])

  const getProducts = async() => {
    const data = await getllProducts()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <>
      <div className="productHead-container">
        <h1>PRODUCTS</h1>
      </div>

      <div className="productBody-container">
        {
          !products
            ? <p><strong>Loading...</strong></p>
            : products.map( product => (<ProductCard key={ product.id } { ...product } />))
        }
      </div>

    </>
  )
}
