import { useState } from "react"

const Input = ({ addCard }) => {
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")

    const clickHandler = () => {
        addCard(key, value)
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
                        onChange={(e) => setKey(e.target.value)}
                        value={key}
                    />
                </td>
                <td className="border-2">
                    <input
                        className="text-black border-2 rounded mx-2"
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </td>
                <td colSpan="2">
                    <button
                        onClick={clickHandler}
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
