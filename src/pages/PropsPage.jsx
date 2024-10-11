import React from 'react';
import Hello from '../components/Hello';
import Hello2 from '../components/Hello2';

const PropsPage = () => {
    return (
        //prettier-ignore
        //함수니까 파라미터를 만들어서 넘길 수 있음
        <>
        <Hello name="홍길동" color="red" age="13">
        </Hello>
        <Hello2 name="홍길순" color="blue" age="20">
        </Hello2>
        </>
    );
};

export default PropsPage;
