import React, { Component, Fragment } from "react";

export default class Section extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <i className={this.props.icon}></i>
                    <span>{this.props.label}</span>
                </div>
            </Fragment>
        )
    }
}