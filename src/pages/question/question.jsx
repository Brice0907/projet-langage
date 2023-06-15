import './style/style.scss'
import Nav from '../../components/nav/nav'
import { useState } from 'react'
import Easy from '../../components/easy/easy'
// import { useLoaderData } from 'react-router-dom'
import questionsData from '../../data/easy.json'

export default function Question() {

    const question = questionsData

    // Pour savoir quel niveau on a selectioné
    const [levelIndex, setLevelIndex] = useState('')

    // Pour le Hover
    const [easyIndex, setEasyIndex] = useState(false);
    const [mediumIndex, setMediumIndex] = useState(false);
    const [hardIndex, setHardIndex] = useState(false);

    if (levelIndex === "") {
        return <div className='difficulte'>
            <Nav />
            <div className='difficulte_bloc'>
                <h2 className='difficulte_bloc_title'>Choisissez votre difficulté :</h2>
                <div className='display'>
                    <div onClick={() => setLevelIndex("easy")} onMouseEnter={() => setEasyIndex(true)} onMouseLeave={() => setEasyIndex(false)} className='difficulte_bloc_btn difficulte_bloc_btn_easy test'>
                        Facile
                    </div>
                    <div onClick={() => setLevelIndex('medium')} onMouseEnter={() => setMediumIndex(true)} onMouseLeave={() => setMediumIndex(false)} className="difficulte_bloc_btn difficulte_bloc_btn_medium">
                        Moyen
                    </div>
                    <div onClick={() => setLevelIndex('hard')} onMouseEnter={() => setHardIndex(true)} onMouseLeave={() => setHardIndex(false)} className="difficulte_bloc_btn difficulte_bloc_btn_hard">
                        Difficile
                    </div>
                </div>
                <div className='difficulte_bloc_description'>
                    <div className={easyIndex ? 'content visible_easy' : 'content difficulte_bloc_description_texte difficulte_bloc_description_texte_easy'}>
                        Idéal pour les débutants, ce niveau offre des défis simples pour se familiariser avec les bases de la programmation et des langages de code.
                        Parfait pour apprendre la syntaxe et la logique.
                    </div>
                    <div className={mediumIndex ? 'content visible_medium' : 'content difficulte_bloc_description_texte difficulte_bloc_description_texte_medium'}>
                        Un niveau intermédiaire pour consolider les connaissances en programmation.
                        Les défis sont plus complexes, nécessitant une compréhension approfondie des concepts et des fonctionnalités avancées.
                    </div>
                    <div className={hardIndex ? 'content visible_hard' : 'content difficulte_bloc_description_texte difficulte_bloc_description_texte_hard'}>
                        Pour les programmeurs expérimentés, ce niveau propose des défis avancés qui mettront à l&apos;épreuve les compétences en résolution de problèmes,
                        l&apos;optimisation du code et la maîtrise des concepts avancés.
                    </div>
                </div>
            </div>
        </div>
    } else if (levelIndex === "easy") {
        return <div className='display'>
            <Nav />
            <Easy question={question} />
        </div>
    }

}

// // eslint-disable-next-line react-refresh/only-export-components
// export async function loader() {
//     return (await import('../../data/easy.json')).default
// }