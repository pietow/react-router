/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

{
    /* import Edit from './Edit' */
}

function Editor({ state, dispatch, inputField, editModal }) {
    return (
        <div className="h-screen">
            <h1 className="mb-10 text-4xl">Card Editor</h1>
            <table className="border-2">
                <thead>
                    <tr className="border-2">
                        <th className="border-2 p-3">Front</th>
                        <th className="border-2 p-3">Back</th>
                        <th colSpan="2" className="border-2 p-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.cards.map((card, id) => {
                        return (
                            <tr key={id}>
                                <td className="border-2">
                                    {Object.keys(card)[0]}
                                </td>
                                <td className="border-2">
                                    {Object.values(card)[0]}
                                </td>
                                <td className="border-2">
                                    <button
                                        className="border-2 rounded-md bg-yellow-500 p-1 m-1"
                                        onClick={() => {
                                            dispatch({ type: 'set_open' })
                                            dispatch({ type: 'set_ID', cardId: id  })
                                            dispatch({ type: 'copy_key_value' })
                                        }}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="border-2">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: 'delete',
                                                cardId: id,
                                            })
                                        }
                                        className="border-2 rounded-md bg-red-500 p-1 m-1"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                {inputField}
            </table>

            <div className="mx-auto w-11/12 grid grid-cols-1 divide-y divide-yellow-500">
                <div className="m-3"></div>
                <Link to="/view">
                    <button className="p-2 m-5 bg-green-600 border-2 rounded-md">
                        Card Viewer
                    </button>
                </Link>
            </div>
            {editModal}
            {/* <Edit */}
            {/*     isOpen={isOpen} */}
            {/*     setIsOpen={setIsOpen} */}
            {/*     cardId={cardId} */}
            {/*     cards={cards} */}
            {/*     editCard={editCard} */}
            {/* ></Edit> */}
        </div>
    )
}

export default Editor
