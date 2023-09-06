/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import "./productCard.css"


export const ProductCard = ({ id, title, price, category, description, image }) => {

  const navigate = useNavigate()

  const onHandleNavigate = () => {
    navigate(`/products/${ id }`)
  }

  const descriptionShort = description.length > 160 
    ? description.split(".").slice(0, 1).join(". ") 
    : description
  
    const titleShort = title.length > 80 
      ? title.split(" ").slice(0, -4).join(" ").concat("...")
      : title

  return (
    <div className="cardContainer">

      <div className="cardContainer_img">
        <img src={ image } alt={ title } />
      </div>

      <div className="cardContainer_info">
        <h4 onClick={ onHandleNavigate}>{ titleShort }</h4>
        <p>{ descriptionShort }</p>
        <span>{ category }</span>
      </div>

      <div className="cardContainer_price">
        <hr />
        <div className="cardContainer_price-info">
          <strong>${ price }</strong>
          <i className="bi bi-bag"></i>
        </div>
      </div>

    </div>
  )
}
