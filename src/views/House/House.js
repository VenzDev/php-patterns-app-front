import {withRouter} from "react-router";
import s from "./House.module.css";
import {useEffect, useState} from "react";
import img from "../../assets/house.png"
import {HouseObj, HouseWithGarageDecorator, HugeHouseDecorator} from "./HouseObj";
import {buyHouse} from "../../api";

const House = ({location, history}) => {
    const [house, setHouse] = useState(null);
    const [payment, setPayment] = useState('CardConnect');

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
                amount: 42000
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
                    <iframe height={"230px"} id="tokenFrame" name="tokenFrame"
                            src="https://fts-uat.cardconnect.com/itoke/ajax-tokenizer.html?useexpiry=true&usecvv=true&formatinput=true&cardnumbernumericonly=true&invalidcreditcardevent=true&invalidcvvevent=true&invalidexpiryevent=true&cardinputmaxlength=25&css=input%7Bfont-size%3A14px%3Bfont-family%3A%27Open%20Sans%27%3Bwidth%3A95%25%3Bbox-sizing%3Aborder-box%3Bheight%3A34px%3Bpadding%3A6px%2012px%3Btext-indent%3A10px%3Bborder%3A1px%20solid%20%23d3d3d3%3Bmargin%3A5px%3Bborder-radius%3A4px%3Boutline%3A0%3Bmargin-bottom%3A10px%3Btransition-duration%3A.2s%7D.error%7Bcolor%3Ared%7Dinput%3Afocus%2Cselect%3Afocus%7Bborder-color%3A%2366afe9%3Bbox-shadow%3Ainset%200%201px%201px%20rgb%280%200%200%20%2F%208%25%29%2C0%200%208px%20rgb%28102%20175%20233%20%2F%2060%25%29%7D%23cccvvfield%7Bwidth%3A60px%3Btext-indent%3A2px%7Dlabel%7Bmargin-left%3A10px%3Bmargin-bottom%3A5px%7Dselect%7Bbox-sizing%3Aborder-box%3Bfont-size%3A14px%3Boutline%3A0%3Bmargin%3A5px%3Bborder%3A1px%20solid%20%23d3d3d3%3Bbackground-color%3A%23fff%3Bborder-radius%3A4px%3Bmargin-bottom%3A10px%3Btransition-duration%3A.2s%3Bheight%3A34px%3Bpadding%3A6px%2012px%7D"
                            scrolling="no"></iframe>
                    <input type="hidden" name="mytoken" id="mytoken"/>
                    <button className={s.submitBtn} onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>

            </div>}
        </div>
    </div>
}

export default withRouter(House);