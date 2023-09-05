import { NavLink, useNavigate } from "react-router-dom"

import './navbar.css'

export const Navbar = () => {
  const navigate = useNavigate()

  const onHandleProfile = () => {
    navigate("/profile")
  }

  return (
    <>
      <nav>
        <div className="linksContainer">
          <NavLink to="/products">Products</NavLink>
        </div>

        <div className="personalInfoContainer">
          <i className="bi bi-cart"></i>
          <i onClick={ onHandleProfile } className="bi bi-person-circle"></i>
        </div>
      </nav>
    </>
  )
}
