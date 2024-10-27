import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LogIn from "./components/logIn/LogIn";
import Catego from "./components/catego/Catego";
import Seatings from "./components/seatings/Seatings";
import Talls from "./components/talls/Talls";

function App() {
  const token = localStorage.getItem("token")
  
  const location = useLocation()
  return (
  <div className="overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Home tok = {token? true : false}/> 
                </div>
                <Footer/>
              </>
            }
            />
            <Route path="/logIn" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <LogIn/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/catego/:cate" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Catego tok = {token? true : false}/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/talls/:cate" element={
              <>
                <NavBar tok = {token? true : false} talls = {true} />
                <div className="mb-5 pb-4">
                  <Talls tok = {token? true : false}/>
                </div>
                <Footer/>
              </>
            }/>
            <Route path="/seating" element={
              <>
                <NavBar tok = {token? true : false} />
                <div className="mb-5 pb-4">
                  <Seatings/>
                </div>
                <Footer/>
              </>
            }/>
          </Routes>
  </div>
  );
}

export default App;
