import React from 'react'

const Button = ({ label, colorImportant, click }) => {

    const classImportant = 'px-8 py-4 bg-yellow-500 text-gray-900 rounded-full border border-1 border-gray-800 text-md font-bold tracking-wide hover:border-white hover:shadow-2xl'
    const classNormal = 'px-8 py-4 bg-gray-900 rounded-full border border-1 border-gray-400 text-md font-semibold tracking-wide hover:border-white hover:shadow-2xl text-white'

    return (
        <button 
            className={colorImportant ? classImportant : classNormal}
            onClick={click}
        >
            {label}
        </button>
    )
}

export default Button