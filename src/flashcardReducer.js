/** @format */

export const initialState = {
    cardId: 0,
    cards: [{ up: 'gg' }, { down: 'G' }, { 'next word': 'w' }],
    key: '',
    value: '',
    editKey: '',
    editValue: '',
    isOpen: false,
}

export function flashcardReducer(state, action) {
    switch (action.type) {
        case 'set_id_zero': {
            return {
                ...state,
                cardId: 0
            }
        }
        case 'inc_card': {
            return {
                ...state,
                cardId: (state.cardId + 1) % state.cards.length,
            }
        }
        case 'clear': {
            return {
                ...state,
                key: '',
                value: '',
            }
        }
        case 'set_ID': {
            return {
                ...state,
                cardId: action.cardId,
            }
        }
        case 'add': {
            state.cards.push({ [state.key]: state.value })
            break
        }
        case 'edit': {
            state.cards[state.cardId] = { [state.editKey]: state.editValue }
            break
        }
        case 'delete': {
            return {
                ...state,
                cards: state.cards.filter(
                    (c, index) => index !== action.cardId,
                ),
            }
        }
        case 'set_open': {
            return {
                ...state,
                isOpen: !state.isOpen,
            }
        }
        case 'set_value': {
            return {
                ...state,
                value: action.value,
            }
        }
        case 'set_key': {
            return {
                ...state,
                key: action.key,
            }
        }
        case 'set_editValue': {
            return {
                ...state,
                editValue: action.value,
            }
        }
        case 'set_editKey': {
            return {
                ...state,
                editKey: action.key,
            }
        }
        case 'copy_key_value': {
            return {
                ...state,
                editKey: Object.keys(state.cards[state.cardId])[0],
                editValue: Object.values(state.cards[state.cardId])[0],
            }
        }
        default: {
            throw Error('Unkown action: ' + action.type)
        }
    }
}
