import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../helpers/getProductById"

import "./styles/productPage.css"


export const ProductPage = () => {

  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { title, description, price, image, category } = product

  const getProduct = async() => {
    const data = await getProductById( id )
    setProduct( data )
  }

  useEffect(() => {
    getProduct()
  }, [])
  

  return (
    <>
      <section>
        <div className="productTitle-container">
          <h1>PRODUCT</h1>
        </div>

        <div className="productInfo-container">

          <div className="image-container">
            <img src={ image } alt={ title } />
          </div>

          <div className="info-container">
            <h4>{ title }</h4>
            <p>{ description }</p>
            <span>{ category }</span>
            <strong>$ { price }</strong>

            <div className="info-container_buttons">
              <button>Return</button>
              <button>Add to cart</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
