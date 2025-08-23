import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import Footer from "./Page/Footer";
import About from "./Page/About";
import Blog from "./Page/Blog";
import BlogDetail from "./Componet/BlogDetail";
import ContactSection from "./Page/Contact";
import ScrollToTop from "./Page/ScrollTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<BlogDetail/>}/>
          <Route path="/contact" element={<ContactSection/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
