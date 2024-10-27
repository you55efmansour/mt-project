import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="text-light footer">
      <div className="container py-4">
        <div className="row justify-content-between">
          <div className="col-12 overflow-hidden d-flex flex-column kustify-content-center align-items-center">
            <h1 className="fs-6 fw-bold">Contact Us :</h1>
            <div className="imgs d-flex gap-2 mt-3">
              <div className="store d-flex flex-column align-items-center">
              </div>
            </div>
            <ul className='d-flex gap-4 mt-3'>
              <li><Link to={"https://www.facebook.com/profile.php?id=61550551316720&mibextid=LQQJ4d"} target='_blank' className='contact-us'><i className="fa-brands fs-3 fa-facebook-f"></i></Link></li>
              <li><Link to={"https://www.instagram.com/touch.mt/profilecard/?igsh=NW91Z28yOTF2ZGxj"} target='_blank' className='contact-us'><i className="fa-brands fs-3 fa-instagram"></i></Link> </li>
              <li><Link to={"https://wa.me/+201026016452"} target='_blank' className='contact-us'><i className="fa-brands fs-3 fa-whatsapp"></i></Link> </li>
            </ul>
          </div>
        </div>
      </div>
        <div className='text-center border-top border-dark-subtle p-2'>&copy; Copyright <span className='text-info'>Youssef Mansour</span> 2024. All right reserved</div>
    </div>
  );
}

export default Footer;
