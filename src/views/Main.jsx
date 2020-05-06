import React from 'react';
import { Component } from "react";
import '../styles/Main.scss';
import * as portuguese from '../utils/pt-br.json';
import * as english from '../utils/en-us.json';

export default class Main extends Component {
    state = {
        draw: 0,
        lng: 'pt-br',
        content: null
    }

    constructor(props) {
        super(props)
        this.updateDraw = this.updateDraw.bind(this)
        this.chooseLanguage = this.chooseLanguage.bind(this)
    }

    componentDidMount() {
        this.chooseLanguage()
    }

    chooseLanguage() {
        const { lng } = this.state;
        if (lng === 'pt-br') this.setState({ content: {...portuguese} })
        else this.setState({ content: {...english} })
    }

    updateDraw() {
        return (
            <div>
                <div className="box-blue"></div>
                <div className="box-purple"></div>
            </div>
        )
    }

    render() {
        const { content } = this.state
        return (
            <React.Fragment>
                <div className="language"></div>
                <div className="header">
                    <div className="boxes">
                        {this.updateDraw()}
                        {this.updateDraw()}
                    </div>
                    <div className="details">
                        <div className="name">
                            {content ? content.default.name : null}
                        </div>
                        <div className="description">
                            {content ? content.default.description : null}
                        </div>
                        <div className="profile">
                            {content ? content.default.profile : null}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}