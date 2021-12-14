/** @format */

import './App.css'
import authors from './data'

function App() {
    return (
        <div className="App flex flex-col items-center bg-gray-900 text-white h-full">
            <ul>
                {authors.map((x, i) => {
                    return (
                        <li key={i}>
                            {x.name}:<ul>{x.books.map((y, ind) => {
                                return (
                                    <li key={ind}>{y}</li>    
                                )
                            })}</ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App
