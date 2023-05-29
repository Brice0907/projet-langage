import "./style/style.scss"
import { useParams } from "react-router-dom";

export default function easy({ question }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    let numerotage = 1
    console.log(question[id]);

    return <div>
        <div>Question {question[id][numerotage].id} : </div>
    </div>
}


