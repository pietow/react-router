/** @format */

import './App.css'
import { useReducer } from 'react'
import { initialState, boatReducer } from './boatReducer'

function App() {
    const [state, dispatch] = useReducer(boatReducer, initialState)
    return (
        <div className="App p-5 flex flex-col items-center bg-gray-900 text-white h-full">
            <h2 className="text-4xl m-6">Boating with useReducer</h2>
            <p className="py-2">
                Engine {state.running === true ? 'ON' : 'OFF'}
            </p>
            <p className="py-2">Speed: {state.speed}</p>
            <p className="py-2">Gear: {state.gear}</p>
            <p className="py-2">Distance travelled: {state.distance}</p>
            <div className="m-4">
                <button
                    onClick={() =>
                        dispatch({
                            type: 'start',
                        })
                    }
                    className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Start Engine
                </button>
                <button
                    onClick={() =>
                        dispatch({
                            type: 'stop',
                        })
                    }
                    className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Stop Engine
                </button>
                <button className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Accelerate
                </button>
                <button className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Slow down
                </button>
                <button 
                    onClick={() =>
                        dispatch({
                            type: 'gear_up',
                        })
                    }
                className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Gear up
                </button>
                <button
                    onClick={() =>
                        dispatch({
                            type: 'gear_down',
                        })
                    }
                className="border-2 border-green-400 bg-green-500 p-2 m-2 rounded">
                    Gear down
                </button>
            </div>
        </div>
    )
}

export default App
