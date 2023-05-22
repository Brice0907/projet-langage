import './style/style.scss'
import Nav from '../../components/nav/nav'

export default function Difficulte() {


    return <div className='difficulte'>
        <Nav />
        <div className='difficulte_bloc'>
            <h2 className='difficulte_bloc_title'>Choisissez votre difficulté :</h2>
            <div className='display'>
                <div className='difficulte_bloc_btn difficulte_bloc_btn_easy'>Facile</div>
                <div className="difficulte_bloc_btn difficulte_bloc_btn_medium">Moyen</div>
                <div className="difficulte_bloc_btn difficulte_bloc_btn_hard">Difficile</div>
            </div>
        </div>
    </div>
}
