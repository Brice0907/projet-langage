import "./style/style.scss"
import Bloc_langage from "../bloc-langage/bloc-langage"

export default function Langage() {
    return <>
        <h2 className="titlemain">Langages :</h2>
        <div className="titlemain_line"></div>
        <div className="titlemain_line_bloc">
            <Bloc_langage logo="Le logo" title="React" />
        </div>
    </>
}