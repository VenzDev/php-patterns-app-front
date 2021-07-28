const isLogged = () => {
    return !!localStorage.getItem('isLogged');
}

const setIsLogged = (trueFalse) => {
    localStorage.setItem('isLogged', trueFalse);
}

const getIsLogged = () => JSON.parse(localStorage.getItem('isLogged'));

export {isLogged, setIsLogged, getIsLogged}