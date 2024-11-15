import Nav from "./nav"
import Logo from '../assets/images/Logo .svg'
export default function Header(){
    return(
        <header>
            <div className="head-section">
                <img className="logo" src={Logo} alt="This is logo"/>
                <Nav/>
            </div>
        </header>
    )
}