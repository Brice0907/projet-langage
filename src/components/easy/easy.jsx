import { useState } from "react";
import "./style/style.scss"
import { useParams } from "react-router-dom";

export default function easy({ question }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    console.log(question[id]);

    const [selectedReponse, setSelectedReponse] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    function handleClick(reponse) {
        if (selectedReponse === reponse) {
            setSelectedReponse(null)
        } else {
            setSelectedReponse(reponse)
        }
    }

    function handleNext() {
        const currentReponse = question[id][currentQuestion].reponse.find((reponse) => reponse.valeur === 'true');

        if (selectedReponse === currentReponse) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedReponse(null)
    }

    return <div className="question">
        <div className="question_bloc">
            <div className="question_bloc_title">Question {question[id][currentQuestion].id} : </div>
            <div>{question[id][currentQuestion].question}</div>
        </div>


        <div className="question_btn">
            {question[id][currentQuestion].reponse.map((reponse, index) => (
                <div className={`question_btn_reponse ${selectedReponse === reponse ? 'selected' : ''}`} // modifier le css pour l'élément sélectionné et le hover
                    key={index}
                    onClick={() => handleClick(reponse)}>
                    {reponse.texte}
                </div>
            ))}
        </div>
        <div className="" onClick={handleNext}>Valider</div>
    </div>
}


