import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 1)
    }

    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
        </div>
    )
}

export default Counter
