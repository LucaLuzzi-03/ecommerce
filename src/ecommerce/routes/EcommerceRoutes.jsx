import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { ProductsPage } from "../pages/ProductsPage"
import { ProductPage } from "../pages/ProductPage"
import { ProfilePage } from "../pages/ProfilePage"

export const EcommerceRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        
        <Route path="/products/:id" element={ <ProductPage /> } />

        <Route path="/*" element={ <Navigate to="/products" /> } />
      </Routes>
    </>
  )
}
