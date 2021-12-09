/** @format */

import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'

import { initialState, flashcardReducer } from './flashcardReducer'
import Editor from './routes/Editor'
import Edit from './routes/Edit'
import Input from './routes/Input'
import View from './routes/View'

function App() {
    const [state, dispatch] = useImmerReducer(flashcardReducer, initialState)

    return (
        <div className="App flex p-32 flex-col items-center bg-gray-900 text-white h-screen">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Editor
                            inputField={
                                <Input state={state} dispatch={dispatch} />
                            }
                            editModal={
                                <Edit state={state} dispatch={dispatch} />
                            }
                            state={state}
                            dispatch={dispatch}
                        />
                    }
                ></Route>
                <Route
                    path="/view"
                    element={<View state={state} dispatch={dispatch} />}
                ></Route>
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
