import s from "./Card.module.css";
import {Link} from "react-router-dom";

const Card = () => {
    return <Link to="/bike/1" className={s.card}>
        <div>img</div>
        <div className={s.content}>
            <p className={s.name}>Bike</p>
        </div>
    </Link>
}

export default Card;