import "./style/style.scss";
import { useLocation } from 'react-router-dom';

export default function Filtre() {

    if (useLocation().pathname === '/main') {
        return <div className="filtre">
            <h2 className='filtre_title'>Filtre :</h2>
            <div className='comingsoon'>Coming soon !</div>
        </div>
    } else {
        return <></>
    }


}