import s from "./Panel.module.css";
import {useState} from "react";
import {getIsLogged} from "../../services/LocalStorage";

const Panel = () => {
    const [user, setUser] = useState(getIsLogged());

    return (
        <div className={s.panel}>
            <div className={s.user}>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
            </div>
            <div className={s.menu}>
                <div>
                    <p>Shop</p>
                    <p>Orders</p>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )

}

export default Panel;