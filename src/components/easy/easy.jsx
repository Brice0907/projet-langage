import "./style/style.scss"
import { useParams } from "react-router-dom";

export default function easy({ question }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    let numerotage = 0
    console.log(question[id]);

    let score = 0
    // faire un usestate pour quand la reponse est selectionner
    // faire un if/else pour la selection de la question, si deja selectionner on deselectionne sinon on selectionne en ajoutant un class css pour voir le truc séléctionné
    // faire une fonction pour le bouton suivant/valider qui vérifie si la reponse séléctionner a la valeur true en faisant un find()
    // si la reponse est true on ajoute 1 au score et on passe a la question suivant, sans oublier de mettre le usestate de sélection a zero

    return <div className="question">
        <div className="question_bloc">
            <div className="question_bloc_title">Question {question[id][numerotage].id} : </div>
            <div>{question[id][numerotage].question}</div>
        </div>


        <div className="question_btn">
            {question[id][numerotage].reponse.map((reponse, index) => (
                <div className="question_btn_reponse" key={index}>
                    {reponse.texte}
                </div>
            ))}
        </div>
    </div>
}


