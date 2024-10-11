import React, { useRef } from 'react'

const UseRefEx2 = () => {
    const nameRef = useRef()

    const handleClick = () => {
        console.log(nameRef.current)
        console.log(nameRef.current.name)
        console.log(nameRef.current.value)
        if (nameRef.current.value.length < 1) {
            nameRef.current.focus()
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <input ref={nameRef} name="name" placeholder="이름을 입력하세요" />
            <button onClick={handleClick}>입력</button>
        </div>
    )
}

export default UseRefEx2
