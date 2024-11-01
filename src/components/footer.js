import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className="footer">
         <div className="share-icons">
          <a href="/#"><FaFacebook/></a>
          <a href="/#"><FaTwitter/></a> 
          <a href="/#"><FaInstagram/></a>
          <a href="/#"><FaTiktok/></a>
         </div>
           
            <div className="footer-down">
                <p>BLOG | Hecho por: Genesis Sanchez</p>
            </div>
        </div>
    );
}

export default Footer;