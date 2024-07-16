import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutPage from "./components/AboutPage";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="bg-background font-body font-normal tracking-wider w-dvw pb-10 px-10">
      <Header />
      <Outlet />
    </div>
  );
};

// Configure the Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resName-resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

// Configure the router -> Provide this router config to our app

const root = ReactDOM.createRoot(document.getElementById("root"));

// Instead of directly rendering the <App /> component, we are going to PROVIDE the component using react router
// root.render(<App />);

root.render(<RouterProvider router={appRouter} />);
