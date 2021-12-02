/** @format */

import './App.css'

import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import Editor from './routes/Editor'
import Input from './routes/Input'
import View from './routes/View';

function App() {
    const [cards, setCards] = useState([
        { up: 'gg' },
        { down: 'G' },
        { 'next word': 'w' },
    ])
    const addCard = (key, value) => {
        setCards([...cards, { [key]: value }])
    }
    const deleteCard = (id) => {
        setCards([...cards.slice(0, id), ...cards.slice(id + 1)])
    }
    const editCard = (id, key, value) => {
        setCards([
            ...cards.slice(0, id),
            { [key]: value },
            ...cards.slice(id + 1),
        ])
    }

    return (
        <div className="App flex p-32 flex-col items-center bg-gray-900 text-white h-screen">
            <Routes>
                <Route
                    path="/editor"
                    element={
                        <Editor
                            inputField={<Input addCard={addCard} />}
                            cards={cards}
                            deleteCard={deleteCard}
                            editCard={editCard}
                        />
                    }
                ></Route>
                <Route path="/view" element={<View cards={cards}/>}></Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default App
