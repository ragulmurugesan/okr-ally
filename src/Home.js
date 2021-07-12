import React, { Component } from 'react';

export default class Home extends Component {

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

