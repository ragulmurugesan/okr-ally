import React, { Component } from 'react';
import { SAMPLE_OKR } from '../constants/okr.constant';
import OkrSegment from './OkrSegment';

export default class Home extends Component {

    constructor() {
        super();
        this.state = { okrData: {} };
    }

    componentDidMount() {
        fetch(SAMPLE_OKR)
            .then(res => res.json())
            .then(value => this.constructJSON(value.data));
    }

    constructJSON(data) {
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
        this.setState({ okrData: cache });
    }

    render() {
        return (
            <>
                <h1 className="txt-center">Ally.io - OKR</h1>
                <section className="ally-okr">
                    {Object.keys(this.state.okrData)
                        .map(parentId => <OkrSegment key={parentId} title={this.state.okrData[parentId].title} nestChildren={this.state.okrData[parentId].children} />)}
                </section>
            </>
        )
    }
}

