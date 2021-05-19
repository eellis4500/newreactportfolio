import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Header/>
      <div className="sections">
        <Home/>
        <Portfolio/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;