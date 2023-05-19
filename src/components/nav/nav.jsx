import './style/style.scss';
import Icon from '../icon/icon';
import Filtre from '../filtre/filtre';

export default function Nav() {

    return <div className='nav'>
        <Filtre />

        <Icon />
    </div>
}