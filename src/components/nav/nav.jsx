import './style/style.scss'
import { Link } from 'react-router-dom'

export default function Nav() {

    function back() {
        window.history.back()
    }

    return <div className='nav'>
        <div>
            <h2 className='nav_title'>Filtre :</h2>
            <div className='comingsoon'>Coming soon !</div>
        </div>

        <div className='nav_btn'>
            <div className='nav_btn_bloc'>
                <Link onClick={back} className='nav_btn_bloc_link'>
                    <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 nav_btn_bloc_link_icon"></i>
                </Link>
            </div>
            <div className='nav_btn_bloc'>
                <Link to='/documentation' className='nav_btn_bloc_link'>
                    <i className="fa-regular fa-file-lines nav_btn_bloc_link_icon"></i>
                </Link>
            </div>
        </div>
    </div>
}