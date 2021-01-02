import React, { Component } from 'react';
import { Authenticator, SignIn } from 'aws-amplify-react';

const CustomAuthenticator = props => (
  <Authenticator hide={[SignIn]}>
    
  </Authenticator>
)

export default class Login extends Component {
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        { !user && <CustomAuthenticator /> }
        
      </React.Fragment>
    )
  }
}