import React, { Component } from 'react'
import gql from "graphql";//to write our query
import { graphql } from 'react-apollo'//send our query or mutation
import SinglePage from '../components/single-page';
import Project from '../components/Project/project';


const Projects = ({ dataProjects }) => {
    return dataProjects.map(p => <Project data={p} key={p.id} />)
}


export default class AboutPage extends Component {

    constructor() {
        super();
        this.state = {
            allProjects: []
        }
    }

    render() {
        return (
            <SinglePage

                title="My Projects"
                contentClassName="projects-page-center"
            >
                <Projects
                    dataProjects={this.state.allProjects}
                />
            </SinglePage>
        )
    }


}
