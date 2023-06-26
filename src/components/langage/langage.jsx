import "./style/style.scss";
import Bloc_langage from "../bloc-langage/bloc-langage";
import react from './assets/react.png';
import html from './assets/html.png';
import php from './assets/php.png';
import symfony from './assets/symfony.png';

export default function Langage() {

    return <>
        <h2 className="titlemain">Langages :</h2>
        <div className="titlemain_line"></div>
        <div className="titlemain_line_bloc">
            <Bloc_langage id={'react'} logo={react} title="React" />
            <Bloc_langage id={'html'} logo={html} title="HTML" />
            <Bloc_langage id={'php'} logo={php} title="PHP" />
            <Bloc_langage id={'symfony'} logo={symfony} title="Symfony" />
        </div>
    </>
}