import React from 'react'

export default function OkrSegment({ title, nestChildren }) {
    return (
        <div className="ally-okr__segment">
            <h3 className="ally-okr__segment-title">{title}</h3>
            <ul>
                {nestChildren.map(child => <li key={child.id} className="ally-okr__segment-item">{child.title}</li>)}
            </ul>
        </div>
    )
}
