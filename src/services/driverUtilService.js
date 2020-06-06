export default {
    formatData
}

function formatData(driver) {

    const formattedDriver = {}

    formattedDriver.name = _formatName(driver.name)
    formattedDriver.driverRank = _formatRank(driver.driverRank)
    formattedDriver.phone = _formatPhone(driver.phone)
    formattedDriver.email = _formatEmail(driver.email)
    formattedDriver.driverType = _formatDriverType(driver.driverType)

    if (!driver.profile_image) {
        formattedDriver.profile_image = require('../assets/imgs/no-img.jpg')
        formattedDriver.isMissingImg = true
    }
    else formattedDriver.profile_image = driver.profile_image

    return formattedDriver
}

function _formatName(name) { //Clean white spaces before and after the name, and leave 1 white space between words
    return (name ? name.trim().replace(/\s+/g, ' ') : 'Missing Name')
}

function _formatRank(rank) {
    return (rank ? rank : 'N/A')
}

function _formatPhone(phone) { //build the following format : xxx.xxx.xxxx
    if (/^\d{3}\.\d{3}\.\d{4}/.test(phone)) { //phone is in the correct format
        return phone
    } 
    let formattetPhone = phone
    if (!formattetPhone) formattetPhone = 'N/A'
    else {
        formattetPhone = formattetPhone.replace(/\D+/g, ''); //leave only digits
        formattetPhone =
            formattetPhone.substring(0, 4) + "." +
            formattetPhone.substring(4, 7) + "." +
            formattetPhone.substring(7, formattetPhone.length);
    }
    return formattetPhone
}

function _formatEmail(email) { //Clean white spaces, before, after and within the text (no spaced allowed in email)
    return (email ? email.replace(/\s/g, '') : 'N/A')
}

function _formatDriverType(driverType) {
    return (driverType ? driverType.trim().toLowerCase() : 'N/A')
}