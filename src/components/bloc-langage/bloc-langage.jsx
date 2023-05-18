import "./style/style.scss"

export default function bloc_langage({ logo, title }) {
    return <div className="icon">
        <img src={logo} className="icon_img"></img>
        <div className="icon_title">{title}</div>
    </div>
}