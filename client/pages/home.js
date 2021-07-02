import React, { Component } from 'react'
import Songs from "./../components/songs";
import Songs from "./../components/create-song";
import gql from "graphql";//to write our query
import { graphql } from 'react-apollo'//send our query or mutation



export default class HomePage extends Component {

    render() {
        return (
            <>
                <h1>Home Page</h1>
                <CreateSong />
                <Songs />

            </>
        )
    }


}
