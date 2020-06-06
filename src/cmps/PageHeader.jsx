import React from 'react'
import DriverFilter from './DriverFilter'

export default function PageHeader() {
    return (
        <div className="main-header flex space-between align-center">
            <div className="header-text">
                Contact List
            </div>
            <DriverFilter/>
        </div>
    )
}
