import logo from '../assets/images/Logo.svg'
export default function Footer(){
    return(
        <footer className="footer-section">
            <img src={logo} alt="this footer logo"/>
            <article>
                <h3>Doormat navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </article>
            <article>
                <h3>Contact</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </article>
            <article>
                <h3>Social media links</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Gmail</li>
                </ul>
            </article>
        </footer>
    )
}