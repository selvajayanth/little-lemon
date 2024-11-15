import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about-us">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/#special-items">Order online</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}