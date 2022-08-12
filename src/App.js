import React, {useState, useEffect} from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
// import Form from "./components/Form";
import Index from "./pages/Index";
import { Toaster } from 'react-hot-toast'


function App() {
  const [scrollHeight, setScrollheight] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollheight(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '1rem',
            color: 'black',
            textAlign: "center",
            fontSize: "16px",
            border: "5px solid #D35872"
          },
        }} />
    <Navbar isScrolling={scrollHeight}/>
    <Routes>
    <Route path="/" element={<Index/>}/>
    {/* <Route path="/formulario" element={<Form />} /> */}
    </Routes>
    
    <Footer/>    
    
    </div>
  );
}

export default App;
