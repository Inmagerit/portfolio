import { useSelector } from 'react-redux';
import './App.css';

import Login from './components/Login';


import CounterContainer from './components/CounterContainer';

function App() {
    // Adjust the state path according to your actual state structure
    const isLogged = useSelector((state) => state.auth.userIsLogged); // Adjust this if `userIsLogged` is under another part of the state

    return (
        <>
            {isLogged ? <CounterContainer /> : <Login />}
        </>
    );
}

export default App;
