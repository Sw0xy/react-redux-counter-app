import { useState } from 'react';
import { increment,decrement ,incrementByAmount ,decrementByAmount } from '../redux/counter/counterSlice';
import { useSelector , useDispatch } from 'react-redux';

function Counter() {
    const [count, setCount] = useState(0);

    const countValue = useSelector(state => state.counter.value);

    const dispatch = useDispatch();

    console.log(countValue);
    
    return (
        <div>
            <h1>Counter</h1>
            <h2>{countValue}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
            <br />
            <input type="number" value={count} onChange={e => setCount(e.target.value) } />
            <button onClick={() => dispatch(incrementByAmount(count))}>Increment</button>
            <button onClick={() => dispatch(decrementByAmount(count))}>Decrement</button>
        </div>
    )
}

export default Counter;
