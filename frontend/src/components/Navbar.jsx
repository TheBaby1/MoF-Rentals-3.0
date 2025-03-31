import styles from '../modules/Navbar.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Navbar(){

    return (
        <>
            <header className={styles.header}>
                <a href="/" className={styles.logo}>Logo</a>

                <nav className={styles.navbar}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/Models" className={styles.link}>Models</Link>
                    <Link to="/Rentals" className={styles.link}>Rentals</Link>
                </nav>
            </header>
        </>
    );  
}

export default Navbar;