import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';
import Logout from './Logout';
import Catalog from './Catalog';

import ShoppingCartDisplay from './ShoppingCartDisplay';

const CounterContainer = () => {
    const dispatch = useDispatch();
    
    // Directly use useSelector with a selector function
    const counter = useSelector((state) => state.count.counter);

    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };


    


    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <Logout/>
            
            <ShoppingCartDisplay/>
            <Catalog/>
            
                
        </div>
        
    );
    
};

export default CounterContainer;
