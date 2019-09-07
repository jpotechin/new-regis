import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signout {
            message
        }
    }
`;

/*
When user clicks signout it will run the refetchQuery that will then refresh the page and navbar will display 
content for user who is not logged in
*/
const Signout = props => (
    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[
        {query: CURRENT_USER_QUERY}
    ]}>
        {(signout) => <button onClick={signout}> Sign Out</button>}
    </Mutation>
)

export default Signout;