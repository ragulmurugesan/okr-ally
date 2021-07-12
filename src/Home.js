import React, { Component } from 'react';


const api = 'https://okrcentral.github.io/sample-okrs/db.json';
export default class Home extends Component {

    componentDidMount() {
        fetch(api).then(res => res.json()).then(value => {
            return this.constructJSON(value.data)
        });
    }

    constructJSON(data) {
        let cache = {};
        for (let i = 0; i < data.length; i++) {
            let id = data[i].id;
            let parentId = data[i].parent_objective_id;
            if (parentId === '') {
                cache[id] = [];
            }
            else {
                if (cache[parentId]) {
                    cache[parentId].push(data[i]);
                } else {
                    console.log(id);
                    cache[parentId] = [];
                    cache[parentId].push(data[i]);
                }
            }
        }
        console.log('Main Obj', cache);
    }

    render() {
        return (
            <>
                <h1 className="txt-center">Ally.io - OKR</h1>
                <section className="ally-okr">
                    <div className="ally-okr__segment">
                        <h3 className="ally-okr__segment-title">1. Research and improve customer satisfaction</h3>
                        <ul>
                            <li className="ally-okr__segment-item">Exceed Net Promoter Score (NPS) of over 8.0</li>
                            <li className="ally-okr__segment-item">Exceed Net Promoter Score (NPS) of over 8.0</li>
                            <li className="ally-okr__segment-item">Exceed Net Promoter Score (NPS) of over 8.0</li>
                            <li className="ally-okr__segment-item">Exceed Net Promoter Score (NPS) of over 8.0</li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}

