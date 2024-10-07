import React, { useState } from 'react'

const GradeInput = () => {
    // let text = ''
    const [name, setName] = useState('')
    const [kor, setKor] = useState(0)
    const [math, setMath] = useState(0)
    const [eng, setEng] = useState(0)

    const onName = (event) => {
        setName(event.target.value)
    }

    const onKor = (event) => {
        setKor(event.target.value)
    }

    const onMath = (event) => {
        setMath(event.target.value)
    }

    const onEng = (event) => {
        setEng(event.target.value)
    }

    return (
        <div>
            이름 : <input name="name" onChange={onName} value={name} />
            <br />
            국어 : <input name="kor" onChange={onKor} value={kor} />
            <br />
            수학 : <input name="math" onChange={onMath} value={math} />
            <br />
            영어 : <input name="eng" onChange={onEng} value={eng} />
            <br />
            <div>
                <div>이름 : {name}</div>
                <div>총점 : {Number(kor) + Number(math) + Number(eng)}</div>
                <div>
                    평균 : {(Number(kor) + Number(math) + Number(eng)) / 3.0}
                </div>
            </div>
        </div>
    )
}

export default GradeInput
