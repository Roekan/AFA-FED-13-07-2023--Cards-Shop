
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../../pages/home/home"


export const Body = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to ="/" />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
