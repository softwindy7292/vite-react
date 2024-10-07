import React, { useState } from 'react'

const GradeInput2 = () => {
    const [grade, setGrade] = useState({
        name: '',
        kor: 0,
        math: 0,
        eng: 0,
    })

    const onChange = (event) => {
        const { name, value } = event.target

        setGrade({
            ...grade,
            [name]: value,
        })
    }

    return (
        <div>
            이름 : <input name="name" onChange={onChange} value={grade.name} />
            <br />
            국어 : <input name="kor" onChange={onChange} value={grade.kor} />
            <br />
            수학 : <input name="math" onChange={onChange} value={grade.math} />
            <br />
            영어 : <input name="eng" onChange={onChange} value={grade.eng} />
            <br />
            <div>
                <div>이름 : {grade.name}</div>
                <div>
                    총점 :{' '}
                    {Number(grade.kor) + Number(grade.math) + Number(grade.eng)}
                </div>
                <div>
                    평균 :{' '}
                    {(Number(grade.kor) +
                        Number(grade.math) +
                        Number(grade.eng)) /
                        3.0}
                </div>
            </div>
        </div>
    )
}

export default GradeInput2
