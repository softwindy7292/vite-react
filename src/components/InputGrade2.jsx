import React, { useState } from 'react';

const InputGrade2 = () => {
    const [grade, setGrade] = useState({
        name: '',
        kor: 0,
        eng: 0,
        math: 0,
    });

    const onChange = (event) => {
        const { name, value } = event.target; //객체 구조 분할
        // const name = event.target.name;
        // const value = event.target.value;

        setGrade({
            ...grade, //...은    name: '', kor: 0,eng: 0, math: 0 이것을 복사한다
            [name]: value,
        });
    };

    //prettier-ignore
    return (
    <div>
        이름 : <input name="name" onChange={onChange} value={grade.name} /><br/>
        국어 : <input name="kor" onChange={onChange} value={grade.kor} /><br/>
        영어 : <input name="eng" onChange={onChange} value={grade.eng} /><br/>
        수학 : <input name="math" onChange={onChange} value={grade.math} /><br/>
        <div>
            <div>총점:{Number(grade.kor) + Number(grade.eng) + Number(grade.math)}</div>
            <div>평균:{(Number(grade.kor) + Number(grade.eng) + Number(grade.math)) / 3.0}</div>
        </div>
    </div>
    );
};

export default InputGrade2;
