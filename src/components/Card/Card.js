import s from "./Card.module.css";
import {Link} from "react-router-dom";
import house from "../../assets/house.png"

const Card = ({name, type}) => {
    return <Link className={s.card} to={{pathname: '/house', state: {name, type}}}>
        <div>
            <img src={house}/>
        </div>
        <div className={s.content}>
            <p className={s.name}>{name}</p>
        </div>
    </Link>
}

export default Card;