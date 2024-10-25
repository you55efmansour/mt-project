import React from "react";
import land from "../../imgs/land.jpg";
import img1 from "../../imgs/1.jpg";
import img2 from "../../imgs/2.jpg";
import img3 from "../../imgs/3.jpg";
import img4 from "../../imgs/4.jpg";
import img5 from "../../imgs/5.jpg";
import img6 from "../../imgs/6.jpg";
import img7 from "../../imgs/7.jpg";


// import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home border-top">
      <Helmet>
        <title>Home</title>
        <meta name="here you can find all of our products you want for your party " content="store"/>
      </Helmet>
      <div className="container">
        {/* frist section */}
        <div className="row justify-content-between mb-5">
          <div className="landing-image">
            <img className="img-fluid h-100" src={land} alt="" />
          </div>
          <div>
            <span className="fw-bold">Wedding planning service :</span> 
            <ul>
              <li className="fw-bold">
               -- weddings & Engagement 
              </li>
              <li className="fw-bold">
               -- Events 
              </li>
              <li className="fw-bold">
               -- Floral designer
              </li>
            </ul>
            
          </div>
        </div>
        {/* second section */}
        <div className="catego row">
          {/* box start */}
          <Link to={"/catego/entrances"} className="col-12 box overflow-hidden">
            <img className="img-fluid rounded" src={img1} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/seating"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img2} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/catego/centerpieces"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img3} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/catego/backdrop"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img4} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/catego/dance-floor"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img5} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/catego/sealing"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img6} alt="" />
          </Link>
          {/* box end */}
          {/* box start */}
          <Link to={"/catego/decoration"} className="col-12 box overflow-hidden mt-5">
            <img className="img-fluid rounded" src={img7} alt="" />
          </Link>
          {/* box end */}
        </div>
      </div>
    </div>
  );
}

export default Home;
