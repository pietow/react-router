/** @format */

const Edit = ({ state, dispatch }) => {
    return (
        <div
            className={
                'fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ' +
                (state.isOpen ? '' : 'hidden')
            }
        >
            <div className="relative top-20 mx-auto px-3 pb-3 border w-96 shadow-lg rounded-md bg-white">
                <div className="w-full flex justify-end text-2xl text-black">
                    <button onClick={() => dispatch({ type: 'set_open' })}>
                        x
                    </button>
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
                            onChange={(e) =>
                                dispatch({
                                    type: 'set_editKey',
                                    key: e.target.value,
                                })
                            }
                            value={state.editKey}
                        />
                        <input
                            className="flex-shrink w-full text-black border-2 rounded"
                            type="text"
                            onChange={(e) =>
                                dispatch({
                                    type: 'set_editValue',
                                    value: e.target.value,
                                })
                            }
                            value={state.editValue}
                        />
                    </div>
                    <div className="">
                        <button
                            className="px-4 py-2 bg-yellow-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={() => {
                                dispatch({ type: 'edit' })
                                dispatch({ type: 'set_open' })
                            }}
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
