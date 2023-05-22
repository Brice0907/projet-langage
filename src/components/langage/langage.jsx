import "./style/style.scss";
import Bloc_langage from "../bloc-langage/bloc-langage";
import react from './assets/react.png';
import html from './assets/html.png';

export default function Langage() {

    return <>
        <h2 className="titlemain">Langages :</h2>
        <div className="titlemain_line"></div>
        <div className="titlemain_line_bloc">
            <Bloc_langage id={'react'} logo={react} title="React" />
            <Bloc_langage id={'html'} logo={html} title="HTML" />
        </div>
    </>
}