import React, { useState } from 'react'

const Question = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <div>
            <article className='question'>
                <header>
                    <h4>{title}</h4>
                    <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <i className='fa fa-minus-square-o'></i> : <i className='fa fa-plus-square-o'></i>}
                    </button>
                </header>
                {showInfo && <p>{info}</p>}
            </article>
        </div>
    )
}

export default Question
