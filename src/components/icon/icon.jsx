import "./style/style.scss"
import { Link } from 'react-router-dom'

export default function Icon() {

    function back() {
        window.history.back()
    }

    return <div className='btn'>
        <div className='btn_bloc'>
            <Link onClick={back} className='btn_bloc_link'>
                <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 btn_bloc_link_icon"></i>
            </Link>
        </div>
        <div className='btn_bloc'>
            <Link to='/documentation' className='btn_bloc_link'>
                <i className="fa-regular fa-file-lines btn_bloc_link_icon"></i>
            </Link>
        </div>
    </div>
}