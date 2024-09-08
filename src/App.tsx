import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootStateType } from "./redux/store";
import { fetchDogs } from "./redux/slices/DogsSlice";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { Main } from "./components/pages/Main";
import { ProductsPage } from "./components/pages/ProductsPage";
import { ProductDetail } from "./components/pages/ProductDetail";
import { CreateProduct } from "./components/pages/CreateProduct";

export const PATH = {
  PAGE1: "/",
  PAGE2: "/products",
  PAGE3: "/products/:id",
  PAGE4: "/create-product",
  EROR404: "/page/error",
} as const;

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div className="app">
      <div className={"header"}>
        <h1>Dog Breeds</h1>
      </div>
      <div className="navbar">
        <div>
          <NavLink
            to={PATH.PAGE1}
            className={({ isActive }) => (isActive ? "active" : "navlink")}>
            Main
          </NavLink>
        </div>
        <div>
          <NavLink
            to={PATH.PAGE2}
            className={({ isActive }) => (isActive ? "active" : "navlink")}>
            Dogs
          </NavLink>
        </div>
        <NavLink
          to="/create-product"
          className={({ isActive }) => (isActive ? "active" : "navlink")}>
          Create Product
        </NavLink>
      </div>

      <Routes>
        <Route path={PATH.PAGE1} element={<Main />} />
        <Route path={PATH.PAGE2} element={<ProductsPage />} />
        <Route path={PATH.EROR404} element={<Error404 />} />
        <Route path={PATH.PAGE3} element={<ProductDetail />} />
        <Route path={PATH.PAGE4} element={<CreateProduct />} />
        <Route path="/*" element={<Navigate to={PATH.PAGE1} />} />
      </Routes>
    </div>
  );
}

export default App;
