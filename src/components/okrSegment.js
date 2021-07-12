import React, { useState } from 'react'

export default function OkrSegment({ title, nestChildren }) {

    const [show, setShow] = useState(true);

    return (
        <div className="ally-okr__segment">
            <h3 className="ally-okr__segment-title okr-accordion">
                <i className={show ? 'accordion-up' : 'accordion-down'} onClick={() => setShow(!show)}></i>
                {title}
            </h3>
            {show &&
                <ul>
                    {nestChildren.map(child => <li key={child.id} className="ally-okr__segment-item">{child.title}</li>)}
                </ul>
            }
        </div>
    )
}
