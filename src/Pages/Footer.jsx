import locations from "./images/MapPinLine.svg"
import envolope from "./images/EnvelopeOpen.svg"
import phone from "./images/Phone.svg"
import facebook from "./images/FacebookLogo.svg"
import insta from "./images/InstagramLogo.svg"
import youtube from "./images/youtube.png"
import mianlogo from "./images/whitelogo.svg"
function Footer (){
    return(
        <>
          <section
    className="footer__area"
   
  >
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-3">
          <div className="footer__logo">
            <a href="#">
              <img src={mianlogo}  alt="" />
            </a>
            <p>Where we drive your insurance needs forward!</p>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="footer__right__blk">
            <div className="footer__list">
              <span>Home</span>
              <ul>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <span>About Us</span>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <span>Contact</span>
              <div className="footer__contact">
                <a href="#">
                  <span>
                    <img src={locations} alt="" />
                  </span>{" "}
                  66 Waverley Dr. Ste 630, Frederick, MD 21702
                </a>
                <a href="tel:+13015916550">
  <span>
    <img src={phone} alt="Phone" />
  </span>{" "}
  301-591-6550
</a>
<a href="mailto:Operations@bceins.com">
  <span>
    <img src={envolope} alt="Email" />
  </span>{" "}
  Operations@bceins.com
</a>
              </div>
            </div>
            <div className="footer__btn">
              <a href="#" className="common__btn">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom__area">
        <div className="single__footer__bottom__step">
          <a href="#">
            <span>
              <img src={insta} alt="" />
            </span>{" "}
            /bolanoscommercial
          </a>
          <a href="#">
            <span>
              <img src={facebook} alt="" />
            </span>{" "}
            /bolanoscommercial
          </a>
          <a href="#">
            <span>
              <img src={youtube} alt="" />
            </span>{" "}
            /bolanoscommercial
          </a>
        </div>
      </div>
      <div className="footer__copyright__area">
        <p>© 2023 All Rights Reserved. Bolanos Commercial Enterprise, LLC</p>
      </div>
    </div>
  </section>
        </>
    )
}
export default Footer