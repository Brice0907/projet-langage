import "./style/style.scss"

export default function bloc_langage({ logo, title }) {
    return <>
        <div>
            {logo}
        </div>
        <div>{title}</div>
    </>
}