import "./style/style.scss"

export default function Header() {
    return <header className="header">

        <h1 className="header_title">The Code Explorer</h1>
        {/* faire un retour au menu lorsqu'on clique sur le h1 */}

        <i className="fa-regular fa-circle-user header_user">
            <a href="" className="header_user_link"></a>
        </i>

    </header>
}