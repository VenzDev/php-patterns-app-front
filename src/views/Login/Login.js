import s from "./Login.module.css";
import {useState} from "react";
import {login} from "../../api";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await login(email, password);
        console.log(result);
    }

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);


    return <div className={s.form}>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={handleEmail} placeholder="email"/>
            <label>Password</label>
            <input onChange={handlePassword} placeholder="password"/>
            <button>Login</button>
        </form>
    </div>
}

export default Login;