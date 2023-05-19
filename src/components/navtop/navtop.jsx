import "./style/style.scss";
import { useLocation } from 'react-router-dom';

export default function Filtre() {

    if (useLocation().pathname === '/main') {
        return <div className="navtop">
            <h2 className='navtop_title'>Filtre :</h2>
            <div className='comingsoon'>Coming soon !</div>
        </div>
    } else {
        return <div className="navtop">
            <h2 className='navtop_title'>Score :</h2>
            <div className='comingsoon'>Coming soon !</div>
        </div>
    }


}