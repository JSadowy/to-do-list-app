import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function validateForm() {

        return (email === 'abc' && password === 'abc');

    }

    function onSubmit(event) {
        event.preventDefault();
        navigate("/main");
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Email </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" disabled={!validateForm()}>Login</button>
        </form>

    )
};