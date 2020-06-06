import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux";
import { saveFilter } from '../store/actions/driverActions.js'



class DriverFilter extends React.Component {

    state = {
        name: ''
    }

    handleChange = (ev) => {
        const { value } = ev.target;  
        this.setState({ name: value }, () => {
            this.props.saveFilter(this.state.name)
        })
    }

    render() {
        return (
            <div className="filter">
                <TextField
                    variant="outlined"
                    label="Search Contacts"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                >
                </TextField>
                <SearchIcon color="disabled" />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    saveFilter
}


export default DriverFilter = connect(mapStateToProps, mapDispatchToProps)(DriverFilter)