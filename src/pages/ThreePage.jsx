import React from 'react'
import Hello3 from '../components/Hello3'

const PropsPage = () => {
    return (
        <>
            <div>
                <Hello3
                    name="홍길동"
                    color="red"
                    isSpecial={true}
                    isName={true}
                ></Hello3>
                <Hello3
                    name="홍길동"
                    color="red"
                    isSpecial={false}
                    isname={false}
                ></Hello3>
            </div>
        </>
    )
}

export default PropsPage
