import "./index.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import MenuIndex from "./pages/MenuIndex.jsx";
import MenuCategory from "./pages/MenuCategory.jsx";
import NotFound from "./pages/NotFound.jsx";

function Layout(){
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuIndex />} />
        <Route path="/menu/:slug" element={<MenuCategory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
