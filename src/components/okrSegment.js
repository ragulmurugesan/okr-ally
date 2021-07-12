import React from 'react'

export default function OkrSegment(props) {
    return (
        <div className="ally-okr__segment">
            <h3 className="ally-okr__segment-title">{props.title}</h3>
            <ul>
                {props.nestChildren.map(child => <li className="ally-okr__segment-item">{child.title}</li>)}
            </ul>
        </div>
    )
}
