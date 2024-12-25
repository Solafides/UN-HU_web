import "./commonResource/css/styles.css"
// import "./commonResource/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPart from "./Components/MainPart";
import { Route, Routes } from "react-router-dom";
import Teams from "./Components/Teams";
import About from './Components/About'
import SharedLayOut from "./Components/SharedLayOut";
import Four04 from "./Components/Four04";
import SDG from "./Components/SDG";
import Events from "./Components/Events";
import Support from "./Components/Support";
import Gallery from "./Components/Gallery";



function App() {


  return (
    <div>
      <Routes>
        <Route path="" element={<SharedLayOut />}>
          <Route index element={<MainPart />} />
          <Route path="/MainPart" element={<MainPart />} />
          <Route path="/Teams" element={<Teams/>} />
          <Route path="/About" element={<About />} />
          <Route path="/SDG" element={<SDG />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<Four04 />} />
          
        </Route>
      </Routes>

     
    </div>
  );
}

export default App

