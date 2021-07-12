import React, { useState, useEffect } from 'react';
import { SAMPLE_OKR } from '../constants/okr.constant';
import OkrSegment from './OkrSegment';

export default function Home() {

    const [state, setState] = useState({ okrData: {} });

    const fetchData = () => {
        console.log('fetchData');
        fetch(SAMPLE_OKR)
            .then(res => res.json())
            .then(value => constructJSON(value.data));
    }

    const constructJSON = (data) => {
        let cache = {};
        const misc = 'MISC000';
        cache[misc] = { title: 'Miscellanous', children: [] };
        data.forEach(item => {
            let id = item.id;
            let parentId = item.parent_objective_id;
            let title = item.title;
            if (!parentId) cache[id] = { title: title, children: [] };
            else if (cache[parentId]) cache[parentId].children.push(item);
            else cache[misc].children.push(item);
        })
        setState({ okrData: cache });
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <h1 className="txt-center">Ally.io - OKR</h1>
            <section className="ally-okr">
                {Object.keys(state.okrData)
                    .map(parentId => <OkrSegment key={parentId} title={state.okrData[parentId].title} nestChildren={state.okrData[parentId].children} />)}
            </section>
        </>
    )
}

