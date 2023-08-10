import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "../../pages/home/Home";
import { Detail } from "../../pages/detail/Detail";
import { Login } from "../../pages/login/Login";
import { Register } from "../../pages/register/Register";
import { Favorites } from "../../pages/favorites/Favorites";
import { Cart } from "../../pages/cart/Cart";
import { User } from "../../pages/user/User";
import { ListUsers } from "../../pages/listUsers/ListUsers";

export const Body = () => {


  return (
    <>
      <Routes>
        {/* {userLoginType == "admin" ? (
          <> */}
          <Route path="/*" element={ <Navigate to="/" /> } />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/listusers" element={<ListUsers />} />
            <Route path="/:id" element={<Detail />} />
          {/* </>
        // ) : userLoginType == "user" ? (
        //   <>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/login" element={<Login />} />
        //     <Route path="/register" element={<Register />} />
        //     <Route path="/user" element={<User />} />
        //     <Route path="/favorites" element={<Favorites />} />
        //     <Route path="/cart" element={<Cart />} />
        //     <Route path="/:id" element={<Detail />} />
        //     <Route path="*" element={<div>404</div> } />
        //   </>
        // ) : (
        //   <>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/login" element={<Login />} />
        //     <Route path="/register" element={<Register />} />
        //     <Route path="/:id" element={<Detail />} />
        //     <Route path="*" element={<div>404</div> } />
        //   </>
        // )} */}
      </Routes>
    </>
  );
};
