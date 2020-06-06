import { loadDrivers } from '../store/actions/driverActions.js'
import { connect } from "react-redux";

import React, { Component } from 'react'
import DriverList from '../cmps/DriverList'
import PageHeader from '../cmps/PageHeader'


class DriverContactPage extends Component {

    state = {
        filteredDrivers: null,
        serverDown: false
    }

    async componentDidMount() {
        try {
            const drivers = await this.props.loadDrivers()
            this.setState({ filteredDrivers: drivers })
        }
        catch (err) {
            console.log(err)
            this.setState({ serverDown: true })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            const currFilterText = this.props.filter.toLowerCase()
            const filteredDrivers = this.props.drivers.filter(
                driver => 
                driver.name.toLowerCase().includes(currFilterText)
                ||
                driver.email.toLowerCase().includes(currFilterText)
                ||   
                driver.phone.toLowerCase().includes(currFilterText)
                )
            this.setState({ filteredDrivers })
        }
    }

    render() {
        const { filteredDrivers, serverDown } = this.state

        return (
            <div className="drivers">
                <PageHeader />
                {serverDown && <h1 className="system-msg">Server doesn't respond</h1>}
                {filteredDrivers && <DriverList drivers={filteredDrivers} />}
                {!serverDown && !filteredDrivers && <h1 className="system-msg">Loading data...</h1>}
                {filteredDrivers && filteredDrivers.length === 0 && <h1 className="system-msg">No results</h1>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drivers: state.driverContacts.drivers,
        filter: state.driverContacts.currFilter
    }
}

const mapDispatchToProps = {
    loadDrivers
}


export default DriverContactPage = connect(mapStateToProps, mapDispatchToProps)(DriverContactPage)