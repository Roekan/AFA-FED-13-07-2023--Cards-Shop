
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { Detail } from "../../pages/detail/Detail"
import { Login } from "../../pages/login/Login"
import { Register } from "../../pages/register/Register"
import { Favorites } from "../../pages/favorites/Favorites"
import { Cart } from "../../pages/cart/Cart"
import { User } from "../../pages/user/User"


export const Body = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to ="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
