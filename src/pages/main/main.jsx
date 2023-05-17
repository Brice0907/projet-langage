import Nav from "../../components/nav/nav"
import Langage from "../../components/langage/langage"
import "./style/style.scss"

export default function Main() {
    return <div className="main">
        <Nav />
        <div className="main_page"><Langage /></div>
    </div>
}