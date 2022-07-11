import classes from "./index.module.css";
import { ILLogo } from "assets";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner_footer}>
        <div className={classes.logo_container}>
          <img src={ILLogo} alt="" />
        </div>
        <div className={classes.footer_third}>
          <h1>Need help?</h1>
          <a href="/">Terms &amp; Conditions</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={classes.footer_third}>
          <h1>More of Us</h1>
          <a href="/">Brochures</a>
          <a href="/">Donate</a>
        </div>
        <div className={classes.footer_third}>
          <h1>Follow Us</h1>
          <li>
            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <span>
            Simple build app design with regular css and react 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
