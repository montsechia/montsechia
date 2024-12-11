// react router
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/Home";
import ExploreProduct from "./pages/ExploreProducts";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

// react toast
import { Toaster } from "react-hot-toast";
import Loader from "./component/home/Loader";

// Importa el componente Loader

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/explore/:category" element={<ExploreProduct />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* Coloca el Loader aquí para que esté visible mientras se carga la página */}
    <Loader/>
      
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            fontSize: "1.6rem",
          },
        }}
      />
    </>
  );
}

export default App;
