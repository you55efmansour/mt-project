import { Link } from "react-router-dom";
function NavBar(prop) {
  let {tok , talls} = prop
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container d-flex justify-content-between ">
            {!talls&&
            <Link className="navbar-brand fw-bold" to="#">
              Touch MT
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
