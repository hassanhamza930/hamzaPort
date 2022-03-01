import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio/portfolio";
import Navigation from "./Navigation";


export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
    )
}