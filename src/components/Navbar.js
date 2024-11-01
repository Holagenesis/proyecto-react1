import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () =>{
    const navref= useRef();

    const showNavbar = () =>{
        navref.current.classList.toggle("responsive-nav");
    }

    return(
        <header>
            <nav ref={navref}>
                <a href="/#">INICIO</a>
                <a href="/#">ACERCA</a>
                <div className="logo-nav"><img src="libro1.png" alt="logo" /></div>
                <a href="/#">POST</a>
                <a href="/#">CONTACTO</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
        </header>

    );
}

export default Navbar;