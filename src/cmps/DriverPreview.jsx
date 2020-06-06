import React, { Component } from 'react'
import { ReactComponent as Citizen } from '../assets/imgs/citizen.svg';
import { ReactComponent as Professional } from '../assets/imgs/professional.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class DriverPreview extends Component {

    state = {
        nameCopied: false
    };

    render() {
        const { name, driverRank, profile_image, isMissingImg, phone, email, driverType } = this.props.driver
        return (

            <section className="driver-preview">
                <div className="driver-img-container">
                    <img className={`driver-img ${isMissingImg ? ' no-img' : ''}`} src={profile_image} alt="Invalid path" />
                </div>
                <div className="driver-details">
                    {driverType === 'citizen' && <Citizen className='driver-type' />}
                    {driverType === 'professional' && <Professional className='driver-type' />}
                    <div className="flex space-between align-center">
                        <p className="driver-name" title={name}>{name}</p>
                        <CopyToClipboard className="copy-to-clipboard-section" text={name} onCopy={() => {
                            this.setState({ nameCopied: true })
                            setTimeout(() => { this.setState({ nameCopied: false }) }, 1500);
                        }}>
                            <span><img className="copy-icon" src={require('../assets/imgs/copy.png')} alt="" title="Copy full name"></img></span>
                        </CopyToClipboard>
                        {this.state.nameCopied ? <span className="copy-confirm">Full name copied</span> : null}
                    </div>
                    <p className="driver-rank" type={'rank'} >Rank: {driverRank}</p>
                    <p className="driver-phone" title={phone}>Phone Number: {phone}</p>
                    <p className="driver-email" title={email}>Email:
                        {email !== 'N/A' && <a href={`mailto:${email}`}> {email}</a>}
                        {email === 'N/A' && ' ' + email}
                    </p>
                </div>
            </section >
        );
    }
}