import React, { Component } from 'react';
import { SAMPLE_OKR } from '../constants/okr.constant';
import OkrSegment from './okrSegment';

export default class Home extends Component {

    constructor() {
        super();
        this.state = { okrData: {} };
    }

    componentDidMount() {
        fetch(SAMPLE_OKR).then(res => res.json()).then(value => {
            return this.constructJSON(value.data)
        });
    }

    constructJSON(data) {
        let cache = {};
        const misc = 'MISC000';
        cache[misc] = { title: 'Miscellanous', children: [] };
        for (let i = 0; i < data.length; i++) {
            let id = data[i].id;
            let parentId = data[i].parent_objective_id;
            let title = data[i].title;
            if (parentId === '') cache[id] = { title: title, children: [] };
            else if (cache[parentId]) cache[parentId].children.push(data[i]);
            else cache[misc].children.push(data[i]);
        }
        this.setState({ okrData: cache });
    }

    render() {
        return (
            <>
                <h1 className="txt-center">Ally.io - OKR</h1>
                <section className="ally-okr">
                    {Object.keys(this.state.okrData).map(parentId => {
                        return <OkrSegment title={this.state.okrData[parentId].title} nestChildren={this.state.okrData[parentId].children} />
                    })}

                </section>
            </>
        )
    }
}

