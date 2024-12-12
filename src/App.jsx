import "./commonResource/css/styles.css"
import "./commonResource/css/bootstrap.css";


import MainPart from "./Components/MainPart";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Teams from "./Components/Teams";
import About from './Components/About'
import SharedLayOut from "./Components/SharedLayOut";
import Four04 from "./Components/Four04";
import SDG from "./Components/SDG";
import Events from "./Components/Events";
import Support from "./Components/Support";
import Gallery from "./Components/Gallery";
import Search from "./Components/Search";


function App() {


  return (
    <div>
      <Routes>
        <Route path="" element={<SharedLayOut />}>
          {/* <Route index element={<MainPart />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Teams" element={<Teams/>} />
          <Route path="/About" element={<About />} />
          <Route path="/SDG" element={<SDG />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<Four04 />} />
          
        </Route>
      </Routes>

     
    </div>
  );
}

export default App

