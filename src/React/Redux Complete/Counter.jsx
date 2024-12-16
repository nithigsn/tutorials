import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './Slice/counterSlicer'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    const [incAmt, setIncAmt] = useState(0);

    const addValue = Number(incAmt) || 0;


    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input
                type='number'
                value={incAmt}
                onChange={(e) => setIncAmt(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Amount</button>

        </div>
    )
}

export default Counter;
