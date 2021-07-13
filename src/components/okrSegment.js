import React, { useState } from 'react'

/**
 * Segment of the individual OKR object
 * @param {*} title Title of the object
 * @param {*} nestChildren Children nested within the object
 */
export default function OkrSegment({ count, title, nestChildren }) {

    /* Hook to show, hide the segment for the accordion */
    const [show, setShow] = useState(true);

    return (
        <div className="ally-okr__segment">
            <h3 className="ally-okr__segment-title okr-accordion">
                <i className={show ? 'accordion-up' : 'accordion-down'} onClick={() => setShow(!show)}></i>
                {count}. {title}
            </h3>
            {show &&
                <ul>
                    {nestChildren.length > 0 ? nestChildren.map(child => <li key={child.id} className="ally-okr__segment-item">{child.title}</li>) : <li className="ally-okr__segment-item">No data found.</li>}
                </ul>
            }
        </div>
    )
}
