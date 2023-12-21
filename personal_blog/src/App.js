import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Blogs from './pages/Blogs'
import PageNoteFound from "./pages/PageNoteFound";
import Contactus from "./pages/Contactus";
import Portfolio from "./pages/Portfolio";
import Services from './pages/Services'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="*" element={<PageNoteFound/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
