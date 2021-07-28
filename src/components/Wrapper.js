import s from "./Wrapper.module.css";
import Panel from "./Panel";

const Wrapper = ({children}) => {
    return (
        <div className={s.wrapper}>
            <Panel/>
            {children}
        </div>)
}

export default Wrapper;