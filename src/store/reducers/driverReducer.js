const initialState = {
    drivers: [],
    currFilter: ''
}

export default function driverReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DRIVERS':
            return {
                ...state,
                drivers: [...action.drivers]
            };
        case 'UPDATE_DRIVER_FILTER':
            return {
                ...state,
                currFilter: action.filter
            }
        default:
            return state;
    }

}
