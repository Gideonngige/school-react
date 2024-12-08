import { Outlet, Link } from "react-router-dom";
import '../styles/Layout.css';
const Layout = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-custom fixed-top" id="nav">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/student/:id" className="nav-link">Student</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
};

export default Layout;