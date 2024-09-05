import { useDispatch } from "react-redux"
import { logIn } from "../redux/slices/authSlice"
const Login = () => {

        const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(logIn())

    }
    return(
        <>
            <button onClick={handleLogin}>login</button>
        </>
    )
}

export default Login