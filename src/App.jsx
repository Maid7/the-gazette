// -import things from react router 
import { Routes,Route } from "react-router-dom";
// -import Root Layout
import RootLayout from "./layouts/RootLayout";
// -import Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Epk from "./pages/Epk";
import Tour from "./pages/Tour";
import EventDetails from "./pages/EventDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
         <Route index element={<Home/>}/> 
         <Route path="contact" element={<Contact/>}/> 
         <Route path="media" element={<Media/>}/> 
         <Route path="epk" element={<Epk/>}/> 
         <Route path="tour" element={<Tour/>}/> 
         <Route path="/:id" element={<EventDetails/>}/> 
      </Route>
    </Routes>
  )
}

export default App;
