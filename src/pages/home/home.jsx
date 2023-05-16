import "./style/style.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
    return <div className="bloc">
        <h2 className="bloc_title">Bienvenue !</h2>
        <div className="bloc_text">Bienvenue sur The Code Explorer, le lieu idéal pour les amateurs de code qui cherchent à tester leurs connaissances.
            Avec une vaste sélection de questions sur des langages populaires, vous pouvez tester vos compétences et apprendre de nouvelles choses en même temps. <br></br>
            Le site est conçu pour tout type de personnes, offrant une variété de difficultés pour tous les niveaux.
        </div>
        <div className="bloc_btn">
            <NavLink to='/main' className='bloc_btn_left bloc_btn_style'>Accéder au site</NavLink>
            <NavLink to='/user' className='bloc_btn_mid bloc_btn_style'>Compte</NavLink>
            <NavLink to='/documentation' className='bloc_btn_right bloc_btn_style'>Documentation</NavLink>
        </div>
    </div>
}