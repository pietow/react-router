/** @format */

import { useState, useEffect } from 'react'

const Edit = ({ isOpen, setIsOpen, editCard, cardId, cards }) => {
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        setKey(Object.keys(cards[Number(cardId)])[0])
        setValue(Object.values(cards[Number(cardId)])[0])
    }, [cards, cardId])

    const handleClick = () => {
        editCard(cardId, key, value)
        setIsOpen(!isOpen)
    }
    return (
        <div
            className={
                'fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ' +
                (isOpen ? '' : 'hidden')
            }
        >
            <div className="relative top-20 mx-auto px-3 pb-3 border w-96 shadow-lg rounded-md bg-white">
                <div className="w-full flex justify-end text-2xl text-black">
                    <button onClick={() => setIsOpen(!isOpen)}>x</button>
                </div>
                <div className="mt-3 text-center">
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            Please change the values or leave them.
                        </p>
                    </div>
                    <div className="flex w-full mb-4">
                        <input
                            className="flex-shrink w-full mr-3 text-black border-2 rounded"
                            type="text"
                            onChange={(e) => setKey(e.target.value)}
                            value={key}
                        />
                        <input
                            className="flex-shrink w-full text-black border-2 rounded"
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                    </div>
                    <div className="">
                        <button
                            className="px-4 py-2 bg-yellow-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={handleClick}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
