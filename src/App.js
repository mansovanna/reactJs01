import HomeScreen from "../src/screen/home/HomeScreen";
import AboutScreen from "../src/screen/about/AboutScreen";
import TechScreen from "../src/screen/teacher/TecherListScreen";
// import MainContainer from "../src/screen//container/MainContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css"

const App = () =>{
  return(
    <BrowserRouter>
      <div className="main_body">
        <div className="menu_main">
          <Link className="menu_item" to="/">Home</Link>
          <Link className="menu_item" to="/teacher">Teacher</Link>
          <Link className="menu_item" to="/about">About</Link>
        </div>

        <Routes>
          {/* register rout */}
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/teacher" element={<TechScreen/>}/>
          <Route path="/about" element={<AboutScreen/>}/>
          <Route path="*" element={<h1> Rout not found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;