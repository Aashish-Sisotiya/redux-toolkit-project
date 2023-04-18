import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import SearchInput from "./Components/SearchInput";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <SearchInput />
                <HomePage />
              </Layout>
            </>
          }
        ></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
