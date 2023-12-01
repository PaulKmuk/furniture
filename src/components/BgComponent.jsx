import React from 'react'

const BgComponent = ({ colorImportant }) => {

    const classCrircles = 'w-3 h-3 bg-gray-700 rounded-full'
    const classImportantCrircles = 'w-3 h-3 bg-yellow-500 rounded-full'

    let array = []

    for(let i = 1; i < 101; i++) {
        array.push(i)
    }

    return (
        <div className='grid grid-cols-10 gap-8'>
            {array.map(el => (
                <div key={el} className={colorImportant ? classImportantCrircles : classCrircles}>

                </div>
            ))}
        </div>
    )
}

export default BgComponent