import { useDispatch } from "react-redux"
import {  logOut } from "../redux/slices/authSlice"
const Logout = () => {

        const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())

    }
    return(
        <>
            <button onClick={handleLogOut}>Logout</button>
        </>
    )
}

export default Logout