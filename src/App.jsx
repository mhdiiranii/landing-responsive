import "./App.css";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./component/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<ContactUs />} path="/contact-us" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
