import React, { useState, userContext } from "react";
import {withRouter} from "react-router";
import { Input, Container, Form, Button, FormField } from 'semantic-ui-react';
import firebase from 'firebase';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // const handleFieldChange = event => {
    //     event.preventDefault()
    //     const stateToChange = {}
    //     stateToChange[event.target.id] = event.target.value;
        
    //     //console.log(event.target.id);
    //     this.setState(stateToChange); 
    // }

    const handleRegister = event => {
        event.preventDefault();
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(resp => {
            if(resp.user){
              Auth.setLoggedIn(true)
            } 
        })
    }


    return(
        <>
            <Container>
                <p>User is logged in: {this.state.loggedIn} </p>
            </Container>
            <Form
            onSubmit={this.handleRegister}
            >
                <FormField>
                    <Input
                    value={firstName}
                    id={"firstName"}
                    placeholder={"First Name"}
                    type={"text"}
                    onChange={event => setFirstName(event.target.value)}
                    ></Input>
                </FormField>
                <FormField>
                    <Input
                    value={lastName}
                    id={"lastName"}
                    placeholder={"Last Name"}
                    type={"text"}
                    onChange={event => setLastName(event.target.value)}
                    ></Input>
                </FormField>
                <FormField>
                    <Input
                    value={email}
                    id={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    onChange={event => setEmail(event.target.value)}
                    ></Input>
                </FormField>
                <FormField>                        
                    <Input
                    value={password}
                    id={"password"}
                    placeholder={"password"}
                    type={"password"}
                    onChange={event => setPassword(event.target.value)}
                    ></Input>
                </FormField>
                <FormField>
                    <Button
                    type={"submit"}
                    >Submit</Button>
                </FormField>
            </Form>
        </>
    )
};
export default withRouter(Register);