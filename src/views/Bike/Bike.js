import {withRouter} from "react-router";
import s from "./Bike.module.css";
import {useEffect, useState} from "react";
import img from "../../assets/house.png"
import {HouseObj, HouseWithGarageDecorator, HugeHouseDecorator} from "./HouseObj";
import {buyHouse} from "../../api";

const Bike = ({location, history}) => {
    const [house, setHouse] = useState(null);
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        let type = location.state.type;
        let house = new HouseObj();

        if (type === 'hugeHouse') {
            house = new HugeHouseDecorator(house);
        } else if (type === 'houseWithGarage') {
            house = new HouseWithGarageDecorator(house);
        }
        house.updatePrice(20000)
        setHouse(house);

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let product = house.houseObj.data;
        product.name = location.state.type;

        let data = {
            product,
            userId: 2,
            payment: {
                method: "BankTransfer",
                amount: 20
            }
        }
        let result = await buyHouse(data);
        history.push('/success/' + result.data)
    }

    return <div className={s.wrapper}>

        <div className={s.info}>
            <div>
                <h2>{location.state.name}</h2>
                {house && house.houseObj && <div className={s.houseInfo}>
                    <p><span>Materiał:</span>{house.houseObj.data.material}<span></span></p>
                    <p><span>Ilość okien:</span><span>{house.houseObj.data.windowAmount}</span></p>
                    <p><span>Rozmiar domu:</span><span>{house.houseObj.data.size}</span></p>
                    <p><span>Czy posiada garaż:</span><span>{house.houseObj.data.isGarage ? 'Tak' : 'Nie'}</span></p>
                    <p><span>Ilość pięter:</span><span>{house.houseObj.data.floors}</span></p>
                </div>}
                <div className={s.price}>
                    Cena: {house && house.houseObj && house.houseObj.price}
                </div>
            </div>
            <div><img src={img}/></div>

        </div>
        <div className={s.payments}>
            <p>Payment Methods</p>
            <div className={s.paymentTypes}>
                <div onClick={() => setPayment('blik')}><span></span>Blik</div>
                <div onClick={() => setPayment('bankTransfer')}><span></span>Bank Transfer</div>
                <div onClick={() => setPayment('CardConnect')}><span></span>CardConnect</div>
            </div>
            {payment === 'blik' && <div>blik</div>}
            {payment === 'bankTransfer' && <div></div>}
            {payment === 'CardConnect' &&
            <div className={s.cardconnect}>
                <p>CardConnect</p>
                <form name="tokenform" id="tokenform">
                    <iframe id="tokenFrame" name="tokenFrame"
                            src="https://fts-uat.cardconnect.com/itoke/ajax-tokenizer.html" frameBorder="0"
                            scrolling="no"></iframe>
                    <input type="hidden" name="mytoken" id="mytoken"/>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>

            </div>}
        </div>
    </div>
}

export default withRouter(Bike);