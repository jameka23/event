import React, { Component } from "react";
import {withRouter} from "react-router";
import { Input, Container, Form, Button, FormField } from 'semantic-ui-react';
import firebase from 'firebase';

export default class Register extends Component {

    state = {
        loggedIn: false,
        email: "",
        password: ""
    }

    componentDidMount(){

    }

    handleFieldChange = event => {
        event.preventDefault()
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value;
        
        //console.log(event.target.id);
        this.setState(stateToChange); 
    }

    handleRegister = event => {
        event.preventDefault();
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(resp => {
            if(resp.user){
              Auth.setLoggedIn(true)
            } 
        })
    }


    render(){
        return(
            <>
                <Container>
                    <p>User is logged in: {this.state.loggedIn} </p>
                </Container>
                <Form
                onSubmit={this.handleRegister}
                >
                    <Input
                    id={"firstName"}
                    placeholder={"First Name"}
                    type={"text"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                    <Input
                    id={"lastName"}
                    placeholder={"Last Name"}
                    type={"text"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                    <Input
                    id={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                    <Input
                    id={"password"}
                    placeholder={"password"}
                    type={"password"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                    <Button
                    type={"submit"}
                    >Submit</Button>
                </Form>
            </>
        )
    }
}
withRouter(Register);