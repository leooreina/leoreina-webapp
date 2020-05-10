import React, { Component, Fragment } from "react";
import '../styles/Section.scss';

export default class Section extends Component {
    render() {
        return (
            <Fragment>
                <div className="background-section">
                    <span className="section-icon"><i className={this.props.icon}></i></span>
                    <span className="section-label">{this.props.label}</span>
                </div>
            </Fragment>
        )
    }
}