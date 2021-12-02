import "./App.css"

import { Routes, Route } from "react-router-dom"
import React, { useState } from "react"


function App() {
    const [cards, setCards] = useState([{ up: "gg" }])
    const addCard = (key, value) => {
        setCards([...cards, { key: value }])
    }
    const deleteCard = (id) => {
        setCards([...cards.slice(0, id), ...cards.slice(id)])
    }
    const editCard = (id, key, value) => {
        setCards([...cards.slice(0, id), { key: value }, ...cards.slice(id)])
    }

    return (
        <div className="App flex flex-col items-center bg-gray-900 text-white h-full">
            <Routes>
                <Route path="/" element={Editor}></Route>
                {/* <Route path="/view" element={View}></Route> */}
                {/* <Route */}
                {/*     path="*" */}
                {/*     element={ */}
                {/*         <main style={{ padding: "1rem" }}> */}
                {/*             <p>There's nothing here!</p> */}
                {/*         </main> */}
                {/*     } */}
                {/* ></Route> */}
            </Routes>
        </div>
    )
}

function Editor() {
    return (
        <div>
            bla
        </div>
    )
}

export default App
