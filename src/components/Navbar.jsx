import PropTypes from 'prop-types'
import styles from './Navbar.module.css'
import { MdBackHand, MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from 'react';


const Navbar = (props) =>{

        //Track the current mode with a boolean state
        const [isDarkMode, setIsDarkMode] = useState(true);
        const [navbarMode, setNavbarMode] = useState(true);

        // Function to handle the button click
        const handleChangeMode = () => {
            setIsDarkMode((prevMode) => !prevMode);
            setNavbarMode((prevMode) => !prevMode);
        }; 

    return(
        <nav className={navbarMode ? `navbar navbar-expand-lg bg-body-secondary` : `navbar navbar-expand-lg bg-dark`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://th.bing.com/th/id/OIP.puG4j8paTbiYpPgkeU_OKgHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Bootstrap" width="30" height="24" />
                </a>
                <a className={`navbar-brand ${styles.sp}`} href="/">{props.appName}</a>
                <button type="button" 
                className={`btn btn-light ${styles.changeModeBtn}`}
                onClick={handleChangeMode}
                > {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}</button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    appName : PropTypes.string.isRequired,
    about: PropTypes.string
}

// Navbar.defaultProps = {
//     appName: 'Give an app name',
// }

export default Navbar;




