import React, { Component } from 'react'
import gql from "graphql";//to write our query
import { graphql } from 'react-apollo'//send our query or mutation
import SinglePage from '../components/single-page';


export default class AboutPage extends Component {

    render() {
        return (
            <>
                <SinglePage

                    title="About Me"
                    sectionClassName="single-page"
                    contentClassName="page-info"
                >

                    <p>
                        Hello, I am Yassine Rassy and I am a web developer. I live and work in
                        somewhere warm. I spend most of my day, experimenting with HTML, CSS
                        and JavaScript (and its endless list of frameworks). I enjoy coding
                        and the challenge of learning something new everyday. You can also
                        find me at youtube channel
                        <a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA"
                        >Coding SBS </a
                        >
                    </p>

                </SinglePage>
            </>
        )
    }


}
