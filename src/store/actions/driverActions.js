import driverService from '../../services/driverService.js';

export function loadDrivers() {
    return async dispatch => {
        try {
            const drivers = await driverService.query()
            dispatch({ type: 'SET_DRIVERS', drivers })
            return drivers
        }
        catch (err) {
            console.log('DriverActions: error in loadDrivers', err);
            throw new Error('Server is not reachable')
        }
    }
}


export function saveFilter(filter) {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_DRIVER_FILTER', filter })
        }
        catch (err) {
            console.log('DriverActions: error in saveFilter', err);
        }
    }
}
