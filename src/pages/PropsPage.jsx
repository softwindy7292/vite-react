import React from 'react'
import Hello from './../components/Hello'
import Hello2 from '../components/Hello2'

const PropsPage = () => {
    return (
        <>
            <Hello name="홍길동" color="red" age="20"></Hello>
            <Hello name="홍길순" color="blue" age="21"></Hello>
            <Hello2 name="홍길동2" color="red" age="20"></Hello2>
            <Hello2 name="홍길순2" color="blue" age="22"></Hello2>
        </>
    )
}

export default PropsPage
