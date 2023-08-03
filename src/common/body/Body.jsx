
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { Detail } from "../../pages/detail/Detail"


export const Body = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to ="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
