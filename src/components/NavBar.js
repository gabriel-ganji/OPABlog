import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                OPA<span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
    
}

export default NavBar;