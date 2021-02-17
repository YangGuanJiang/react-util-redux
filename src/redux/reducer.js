const initState = {
    input: ''
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT' :
            console.log(state)
            return {
                ...state,
                input: action.payload
            };

        default: break;
    }
    return state;
}
