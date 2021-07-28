import Card from "../../components/Card/Card";
import s from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={s.bikes}>
            <Card type="hugeHouse" name="Duży drewniany dom"/>
            <Card type="houseWithGarage" name="Dom z garażem"/>
        </div>)
}

export default Dashboard;