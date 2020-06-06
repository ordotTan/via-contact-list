import axios from 'axios'
import driverUtilService from './driverUtilService'

// const baseUrl = 'http://localhost:3030/driver';
const baseUrl = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list'

export default {
    query
}

async function query() {
    const res = await axios.get(`${baseUrl}`)
    const drivers = res.data
    const formattedDrivers = drivers.map(driver => driverUtilService.formatData(driver))
    return formattedDrivers
}