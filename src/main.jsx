// import { Outlet } from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Products from "./pages/Products/Products";

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>home route</div>,
//   },
//   {
//     path: "/products",
//     element: <div>products route hitted</div>,
//   },
//   {
//     path: "/about",
//     element: <div>about route hitted</div>,
//   }
// ]);

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div className="py-5 shadow-lg">fixed route</div>
//         <Outlet></Outlet>
//       </section>
//     ),
//     children: [
//       {
//         path: "/products",
//         element: <div>products nested route hitted</div>,
//       },
//       {
//         path: "/about",
//         element: <div>about nested route hitted</div>,
//       },
//     ],
//   },
// ]);

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//       {
//         path: "/products",
//         element: <Products></Products>,
//       },
//     ],
//   },
// ]);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./Route/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>
);
