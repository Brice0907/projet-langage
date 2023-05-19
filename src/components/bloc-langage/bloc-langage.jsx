import "./style/style.scss"
import { Link } from "react-router-dom"

export default function bloc_langage({ logo, title, id }) {

    console.log(id);

    return <Link to={`/main/${id}`} className="icon" id={id}>
        <img src={logo} className="icon_img"></img>
        <div className="icon_title">{title}</div>
    </Link>
}