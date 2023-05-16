import "./style/style.scss"
import { NavLink } from "react-router-dom";

export default function Header() {
    return <header className="header">

        <NavLink to='/' className='header_link' ><h1 className="header_link_title">The Code Explorer</h1></NavLink>

        <i className="fa-regular fa-circle-user header_user">
            <NavLink to='/user' className="header_user_link"></NavLink>
        </i>

    </header>
}