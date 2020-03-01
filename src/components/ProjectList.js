import React, { Component } from 'react';
import '../assets/style/projectList.css';
import {apps} from './projectsData';
import Project from './Project';

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowing: false

        }
    }
    loadApps = () => {
            this.setState({isShowing: !this.state.isShowing});
    }

    render() {
        let appsList = apps.map((app) => (
            <Project key = {app.key}
                     img = {app.img}
                     link = {app.link}
                     title = {app.title}
                     description = {app.description}
                    />
        ))
        if(this.state.isShowing) {
            return(
                <div className="apps-container">
                <div className="apps-header__container">
                <h1 className="apps-header">Apps</h1>
                <button className="btn-about grow" onClick={this.loadApps}>About the Apps</button>
                </div>
                
                    <div className="apps-wrapper">
                        {appsList}
                    </div>
                </div>
            )
        }
        return (
            <div className="apps-container">
                <div className="apps-header__container">
                <h1 className="apps-header">Apps</h1>
                <button className="btn-load-apps grow" onClick={this.loadApps}>Load Apps</button>
                </div>
                <div className="apps-body"><p>Load the apps from this page and I hope you'll have fun playing with them as much as I had building them! </p>
                </div>
            </div>
        )
    }
}

export default ProjectList
