class HouseObj {
    data;
    price;

    constructor() {
        this.data = {
            material: null,
            windowAmount: null,
            size: null,
            isGarage: null,
            floors: null
        }
        this.price = 0;
    }

    updatePrice(price) {
        this.price += price;
    }
}

class HugeHouseDecorator {
    houseObj

    constructor(houseObj) {
        this.houseObj = houseObj;
        this.houseObj.data.floors = 2;
        this.houseObj.data.material = 'wooden';
        this.houseObj.data.windowAmount = 10;
        this.houseObj.data.size = 'huge';
        this.houseObj.data.isGarage = false;
    }

    updatePrice(price) {
        let updatedPrice = this.houseObj.data.windowAmount * 200 + 20000 + price;
        this.houseObj.updatePrice(updatedPrice);
    }
}

class HouseWithGarageDecorator {
    houseObj

    constructor(houseObj) {
        this.houseObj = houseObj;
        this.houseObj.data.floors = 1;
        this.houseObj.data.material = 'wooden';
        this.houseObj.data.windowAmount = 6;
        this.houseObj.data.size = 'small';
        this.houseObj.data.isGarage = true;
    }

    updatePrice(price) {
        let updatedPrice = this.houseObj.data.windowAmount * 400 + price;
        this.houseObj.updatePrice(updatedPrice);
    }
}

export {HouseObj, HugeHouseDecorator, HouseWithGarageDecorator}

