
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { Detail } from "../../pages/detail/Detail"
import { Login } from "../../pages/login/Login"
import { Register } from "../../pages/register/Register"


export const Body = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to ="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
