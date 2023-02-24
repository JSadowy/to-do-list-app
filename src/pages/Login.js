import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        navigate("/main");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"></input>
            <input type="password"></input>
            <button type="submit">Login</button>
        </form>
    )
}