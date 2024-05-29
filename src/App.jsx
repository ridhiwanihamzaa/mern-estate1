import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigIn from "./pages/SigIn";

import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/sign-in" element={<SigIn/>}  />
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}  />
    <Route path="/profile" element={<Profile/>}  />
  </Routes>
  </BrowserRouter>;
}
