import { useState } from "react";
import "./style/style.scss"
import { useParams } from "react-router-dom";

export default function easy({ question }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    let numerotage = 0
    console.log(question[id]);

    let score = 0

    const [selectedReponse, setSelectedReponse] = useState(null);
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    console.log(selectedReponse);

    function handleClick(reponse) {
        if (selectedReponse === reponse) {
            setSelectedReponse(null)
        } else {
            setSelectedReponse(reponse)
        }
    }

    // function handleNext() {

    // }

    // faire une fonction pour le bouton suivant/valider qui vérifie si la reponse séléctionner a la valeur true en faisant un find()
    // si la reponse est true on ajoute 1 au score et on passe a la question suivant, sans oublier de mettre le usestate de sélection a zero

    return <div className="question">
        <div className="question_bloc">
            <div className="question_bloc_title">Question {question[id][numerotage].id} : </div>
            <div>{question[id][numerotage].question}</div>
        </div>


        <div className="question_btn">
            {question[id][numerotage].reponse.map((reponse, index) => (
                <div className={`question_btn_reponse ${selectedReponse === reponse ? 'selected' : ''}`} // modifier le css pour l'élément sélectionné et le hover
                    key={index}
                    onClick={() => handleClick(reponse)}>
                    {reponse.texte}
                </div>
            ))}
        </div>
    </div>
}


