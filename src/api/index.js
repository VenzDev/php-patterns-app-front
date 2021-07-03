import axios from "axios";


const url = 'localhost:4000?action=';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const login = async (email, password) => {
    let fetchedData = await axios.post(url + 'login', {email, password});
    return fetchedData.data;
}

export {login};