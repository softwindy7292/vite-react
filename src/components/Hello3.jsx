import React from 'react'

const Hello = ({ name, color, isSpecial, isName }) => {
    return (
        //prettier-ignore
        <div style={{ color : color }}>
            이름 : {isName ? name : "냠"}<br/>
            색상 : {color}<br/>
            {isSpecial ? <b>*</b> : null}
        </div>
    )
}

export default Hello
