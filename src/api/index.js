const url = 'http://localhost:4000?action=';

const login = async (email, password) => {
    let data = fetch(url + 'login', {method: "POST", body: JSON.stringify({email, password})})
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('error');
            }
        })
        .then((data) => data)
        .catch(er => er);
    return data;
}

const buyHouse = async (data) => {
    let res = fetch(url + 'buyProduct', {method: "POST", body: JSON.stringify(data)})
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('error');
            }
        })
        .then((data) => data)
        .catch(er => er);
    return res;
}

const downloadLink = (productId) => {
    return url + 'downloadPdf&productId=' + productId;
}


export {login, buyHouse, downloadLink};