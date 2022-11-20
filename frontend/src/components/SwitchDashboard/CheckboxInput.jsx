import React from 'react'
import './switch.css';

export default function CheckboxInput() {
    return (
        <div className="notification-options">
            <input className="big-input" type="text" placeholder="Accepted" />
            <input className="switch" type="checkbox" />
            <input className="big-input" type="text" placeholder="Rejected" />
            <input className="switch" type="checkbox" />
            <input className="big-input" type="text" placeholder="Funded" />
            <input className="switch" type="checkbox" />
        </div>
    );
}
