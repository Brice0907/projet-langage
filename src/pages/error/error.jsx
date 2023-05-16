import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import { Link } from "react-router-dom";
import './style/style.scss'

export default function Error() {
    return <>
        <Header />
        <div className="bloc_error">
            <div className="bloc_error_404">ERROR 404</div>
            <div>
                <div className="bloc_error_text">Oups ! La page que vous demandez n&apos;existe pas.</div>
                <Link to='/' className="bloc_error_link">Retourner à la page d&apos;Acceuil</Link>
            </div>
        </div>
        <Footer />
    </>

}