import React, { Component } from 'react'
import gql from "graphql";//to write our query
import { graphql } from 'react-apollo'//send our query or mutation
import AboutMe  from '../components/about/about';
import Services from '../components/services/services';
import LatestWorks from '../components/latestWorks/latest-works';
import Skills from '../components/skills/skills';
import Timelines from '../components/timelines/timelines';
import Contact from '../components/contact/contact';

export default class HomePage extends Component {

    render() {
        return (
            <>
                <Hero /> 
                <AboutMe/>
                <Services/>
                <LatestWorks/>
                <Contact/>
                <Skills/>
                <TimeLines/>

            </>
        )
    }


}
