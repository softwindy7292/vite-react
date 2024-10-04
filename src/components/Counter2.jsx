import React from 'react'

const Counter2 = () => {
    let num = 0

    const onIncrease = () => {
        num++
        console.log(num + '증가됨')
    }

    const onDecrease = () => {
        num--
        console.log(num + '감소됨')
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
        </div>
    )
}

export default Counter2
