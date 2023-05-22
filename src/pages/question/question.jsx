import './style/style.scss'
import Nav from '../../components/nav/nav'
import { useState } from 'react'

export default function Question() {

    const [levelIndex, setLevelIndex] = useState('')

    if (levelIndex === "") {
        return <div className='difficulte'>
            <Nav />
            <div className='difficulte_bloc'>
                <h2 className='difficulte_bloc_title'>Choisissez votre difficulté :</h2>
                <div className='display'>
                    <div onClick={() => setLevelIndex("easy")} className='difficulte_bloc_btn difficulte_bloc_btn_easy'>Facile</div>
                    <div onClick={() => setLevelIndex('medium')} className="difficulte_bloc_btn difficulte_bloc_btn_medium">Moyen</div>
                    <div onClick={() => setLevelIndex('hard')} className="difficulte_bloc_btn difficulte_bloc_btn_hard">Difficile</div>
                </div>
                {/* Rajouter du texte en mode facile c'est des question très simple .... medium pour les personnes ayant deja un peu codé avec .. et hard pour les experts qui souhaite se challender */}
            </div>
        </div>
    } else if (levelIndex != "") {
        return <>Win</>
    }

}
