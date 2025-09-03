import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact/contact";
import EducationSection from "./components/Education/education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/education" element={<EducationSection />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right" // where to show the toast
        autoClose={5000} // auto dismiss after 5s (false = manual close)
        hideProgressBar={false} // show/hide the progress bar
        newestOnTop={false} // newest toast at the top
        closeOnClick // allow dismiss on click
        rtl={false} // support right-to-left layout
        pauseOnFocusLoss // pause timer when window loses focus
        draggable // allow drag to dismiss
        pauseOnHover // pause timer on hover
        theme="light"
        style={{ marginTop: "55px" }}
      />
    </BrowserRouter>
  );
};

export default App;
