import React from 'react'
import CheckboxInput from '../../components/SwitchDashboard/CheckboxInput'

export default function NotificationsPage() {
    return (
        <div className='notifications-container'>
            {/* Returns Notifications */}
            <div className="return-notification">
                <div className="heading">
                    <h2>Return Notifications</h2>
                    <hr />
                    <span>Notify me when a return is: </span>
                </div>
                <div className="notify">
                    <CheckboxInput />
                    <p>Get real time notification on every return transaction happening in your account by choosing your preferred settings here.</p>
                </div>
            </div>
            {/* Security Notifications */}
            <div className="return-notification">
                <div className="heading">
                    <h2>Security Notifications</h2>
                    <hr />
                    <span>Notify me when there is a: </span>
                </div>
                <div className="notify">
                    <CheckboxInput />
                    <p>Get real time notification on every return transaction happening in your account by choosing your preferred settings here.</p>
                </div>
            </div>
        </div>
    )
}
