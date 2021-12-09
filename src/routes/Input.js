import { useState } from "react"

const Input = ({ state, dispatch }) => {
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")

    const clickHandler = () => {
        setKey("")
        setValue("")
    }

    return (
        <tfoot>
            <tr>
                <td className="border-2">
                    <input
                        className="text-black border-2 rounded mx-2"
                        type="text"
                        onChange={(e) => dispatch({type: 'set_key', key: e.target.value})}
                        value={state.key}
                    />
                </td>
                <td className="border-2">
                    <input
                        className="text-black border-2 rounded mx-2"
                        type="text"
                        onChange={(e) => dispatch({type: 'set_value', value: e.target.value})}
                        value={state.value}
                    />
                </td>
                <td colSpan="2">
                    <button
                    onClick={() => {
                        dispatch({type: 'add'})
                        dispatch({type: 'clear'})
                    }}
                        className="border-2  rounded-md bg-green-500 p-1 px-10 m-1"
                    >
                        Add
                    </button>
                </td>
            </tr>
        </tfoot>
    )
}

export default Input
