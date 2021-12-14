/** @format */

import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((x) => setData(x))
        }
        fetchData()
    }, [])

    return (
        <div className="App flex flex-col items-center bg-gray-900 text-white h-full">
            <ul>
                {data.map((x) => {
                    return (
                        <li className=" m-20" key={x.id}>
                            <h1 className="text-2xl">{x.title}</h1>
                            <p className="border-2 rounded w-4/12 mt-5 m-auto">{x.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App
