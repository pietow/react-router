/** @format */

export const initialState = {
    running: false, //stop and start
    gear: 0,
    speed: 0,
    distance: 0,
}

export function boatReducer(state, action) {
    switch (action.type) {
        case 'start': {
            if (Math.random() <= 0.5) {
                console.log('start failed')
                return { ...state }
            } else {
                return {
                    ...state,
                    running: true,
                }
            }
        }
        case 'stop': {
            return {
                ...state,
                running: false,
                gear: 0,
            }
        }
        case 'gear_up': {
            if (state.running === true) {
                return {
                    ...state,
                    gear: state.gear === 5 ? 5 : state.gear + 1,
                }
            } else {
                return state
            }
        }
        case 'gear_down': {
            if (state.running === true)
            {
                return {
                    ...state,
                    gear: state.gear === -2 ? -2 : state.gear - 1,
                }
            } else {
                return state
            }
        }
        case 'increase_speed': {
            const iniBoost = state.speed === 0 ? 10 : 1
            if (state.running === true)
            {
                return {
                    ...state,
                    speed:
                    state.speed + iniBoost + (1 / 4) * Math.abs(state.gear),
                }
            } else {
                return state
            }
        }
        case 'decrease_speed': {
            if (state.running === true)
            {
                return {
                    ...state,
                    speed:
                    state.speed > 1
                    ? 1
                    : state.speed === 0
                    ? 0
                    : state.speed - 0.1,
                }
            } else {
                return state
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}
