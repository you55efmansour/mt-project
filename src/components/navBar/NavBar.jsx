import { Link } from "react-router-dom";
import logo from "../../imgs/mt logo.jpeg";
function NavBar(prop) {
  let {tok , talls} = prop
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container d-flex justify-content-between ">
            {!talls&&
            <Link className="navbar-brand fw-bold" to="#">
              <img className="img-fluid logo overflow-hidden rounded-circle" src={logo} alt="img" />
            </Link>
            }
            {talls&&
            <Link className="navbar-brand fw-bold" to="/seating">
              <i className="fa-solid fa-chevron-left"></i>
            </Link>
            }
            <Link to={"/"} className="fw-bold"><i className="fa-solid fa-house"></i></Link>
            {!tok &&
            <Link to={"/login"}>logIn</Link>
            }
            {tok &&
            <Link to={"/login"} onClick={()=> localStorage.clear()}>LogOut</Link>
            }
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
