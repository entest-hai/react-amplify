import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

class SignOutButton extends Component {

	async signOut(){
		try {
	        await Auth.signOut();
	    } catch (error) {
	        console.log('error signing out: ', error);
	    }
	}

	render() {
		return (
			<div>
				<Button onClick={signOut}>Sign Out</Button>
			</div>
		)
	}
}

export default SignOutButton;
