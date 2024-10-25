import low from "../../imgs/low.jpg";
import high from "../../imgs/high.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Seatings() {
  return (
    <div>
      <Helmet>
        <title>Seating</title>
      </Helmet>
      <div className="container">
        {/* 1 */}
        <div className="cat d-flex flex-column justify-content-center align-items-center">
          <div className="type d-flex gap-2 mt-4">
            <Link to={"/talls/shiny-gold-low"}>
              <img className="img-fluid" src={low} alt="" />
            </Link>
            <Link to={"/talls/shiny-gold-high"}>
              <img className="img-fluid" src={high} alt="" />
            </Link>
          </div>
          <div className="fw-bold mt-2 border cate-name p-2 mt-3 rounded">
            Shiny Gold
          </div>
        </div>
        {/* 2 */}
        <div className="cat d-flex flex-column justify-content-center align-items-center">
          <div className="type d-flex gap-2 mt-4">
            <Link to={"/talls/normal-gold-low"}>
              <img className="img-fluid" src={low} alt="" />
            </Link>
            <Link to={"/talls/normal-gold-high"}>
              <img className="img-fluid" src={high} alt="" />
            </Link>
          </div>
          <div className="fw-bold mt-2 border cate-name p-2 mt-3 rounded">
            Normal gold
          </div>
        </div>
        {/* 3 */}
        <div className="cat d-flex flex-column justify-content-center align-items-center">
          <div className="type d-flex gap-2 mt-4">
            <Link to={"/talls/white-low"}>
              <img className="img-fluid" src={low} alt="" />
            </Link>
            <Link to={"/talls/white-high"}>
              <img className="img-fluid" src={high} alt="" />
            </Link>
          </div>
          <div className="fw-bold mt-2 border cate-name p-2 mt-3 rounded">
            White
          </div>
        </div>
        {/* 4 */}
        <div className="cat d-flex flex-column justify-content-center align-items-center">
          <div className="type d-flex gap-2 mt-4">
            <Link to={"/talls/woods-low"}>
              <img className="img-fluid" src={low} alt="" />
            </Link>
            <Link to={"/talls/woods-high"}>
              <img className="img-fluid" src={high} alt="" />
            </Link>
          </div>
          <div className="fw-bold mt-2 border cate-name p-2 mt-3 rounded">
            Woods
          </div>
        </div>
        {/* 5 */}
        <div className="cat d-flex flex-column justify-content-center align-items-center">
          <div className="type d-flex gap-2 mt-4">
            <Link to={"/talls/eclerc-low"}>
              <img className="img-fluid" src={low} alt="" />
            </Link>
            <Link to={"/talls/eclerc-high"}>
              <img className="img-fluid" src={high} alt="" />
            </Link>
          </div>
          <div className="fw-bold mt-2 border cate-name p-2 mt-3 rounded">
            Eclerc
          </div>
        </div>
      </div>
    </div>
  );
}
export default Seatings;
