/** @format */
import '../Card.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const View = ({ cards }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [ID, setID] = useState(0)

    const nextC = () => {
            setIsFlipped(false)
            const length = cards.length - 1
            if (ID === length) {setID(0)}
            else {setID(ID + 1)}
    }

    return (
        <div className="w-full">
            <div className="w-3/12 mx-auto">
                <h1 className="mb-10 text-4xl">Cards Viewer</h1>
                <div className="scene mx-7">
                    <div
                    className={
                        (isFlipped ? 'is-flipped ' : '') +
                        'card-transition card bg-white w-full relative mx-auto text-black rounded'
                    }
                >
        <div className="card__face--front">
            {Object.keys(cards[ID])}
        </div>
        <div className="card__face--back">
            {Object.values(cards[ID])}
        </div>
    </div>
</div>
        <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="border-2 border-white bg-green-400 rounded px-4 py-2 m-7"
    >
            Flip!
    </button>
        <button
        onClick={nextC}
        className="border-2 border-white bg-green-400 rounded px-4 py-2 m-7"
    >
            Next Card!
    </button>
        <div className="mx-auto w-11/12 grid grid-cols-1 divide-y divide-yellow-500">
            <div className="m-3"></div>
            <Link to="/">
                <button className="p-2 m-5 bg-green-600 border-2 rounded-md">
                    Card Editor
                </button>
            </Link>
        </div>
        </div>
        </div>
    )
}

export default View
