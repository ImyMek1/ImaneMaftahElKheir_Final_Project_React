import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <TopBar />
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
