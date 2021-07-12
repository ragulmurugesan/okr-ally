import React, { useState } from 'react'

/**
 * Segment of the individual OKR object
 * @param {*} title Title of the object
 * @param {*} nestChildren Children nested within the object
 */
export default function OkrSegment({ title, nestChildren }) {

    /* Hook to show, hide the segment for the accordion */
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
