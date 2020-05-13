import React from 'react';
import { Component } from "react";
import Section from '../views/Section';
import '../styles/Main.scss';
import * as portuguese from '../utils/pt-br.json';
import * as english from '../utils/en-us.json';

export default class Main extends Component {
    state = {
        draw: 0,
        lng: 'PT',
        content: null,
    }

    constructor(props) {
        super(props)
        this.updateDraw = this.updateDraw.bind(this)
        this.setLanguage = this.setLanguage.bind(this)
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    componentDidMount() {
        this.setLanguage()
    }

    setLanguage() {
        this.setState({ content: {...portuguese} })
    }

    updateDraw() {
        return (
            <div>
                <div className="box-blue"></div>
                <div className="box-purple"></div>
            </div>
        )
    }

    updateLanguage() {
        let { lng } = this.state;
        if (lng === 'PT') this.setState({ lng: 'EN', content: {...english} })
        if (lng === 'EN') this.setState({ lng: 'PT', content: {...portuguese} }) 
    }

    render() {
        const { content, lng } = this.state
        return (
            <React.Fragment>
                <div className="language" onClick={this.updateLanguage}>
                    <div className="language-selection">{lng}</div>
                    <div className="language-icon">
                        <i className="fas fa-language"></i>
                    </div>
                </div>
                <div className="header">
                    <div className="boxes">
                        {this.updateDraw()}
                        {this.updateDraw()}
                    </div>
                    <div className="details">
                        <div className="name">
                            <span>{content ? content.default.name : null}</span>
                        </div>
                        <div className="description">
                            <span>{content ? content.default.description : null}</span>
                        </div>
                        <div className="profile">
                            <span>{content ? content.default.profile : null}</span>
                        </div>
                    </div>
                </div>
                {
                    content ? content.default.sections.map((section, index) => (
                        <Section 
                            key={index}
                            icon={section.icon}
                            label={section.label}
                        />
                    )) : null
                }
            </React.Fragment>
        )
    }
}