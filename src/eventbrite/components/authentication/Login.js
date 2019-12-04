/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {withRouter} from "react-router";
import { Input, Container, Form, Button, FormField } from 'semantic-ui-react'


export default class Login extends Component {
    // set state for Login which will be sessionStorage
    state = {
        email : "",
        password: "",
        activeUser: Number(sessionStorage.getItem("userId"))
    }

    // handle field change...when the user enters anything in the input fields, it's automatically saved to state
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value;
        //console.log(event.target.id);
        this.setState(stateToChange); 
    }

    // check for the current user and set sessionstorage 
    handleLogin = (event) => {
        console.log(this.state)
        event.preventDefault()
        let user = this.props.users.find(user => {
            return (this.state.email.toLowerCase() === user.email.toLowerCase()) && (this.state.password === user.password);
        })
        console.log(user)

        //handle all the field validity 
        if(this.state.email === ""){
            alert("Please enter your email!");
        }else if(this.state.password === ""){
            alert("Please enter your password!");
        }else if(this.state.password ==="" && this.state.email ===""){
            alert("Please enter your credentials!");
        }else if(user !== undefined){
            // there is a match 
            this.setState({activeUser: Number(sessionStorage.setItem("userId", user.userId))});
            this.props.history.push("/home");
        }
    }
    
    render(){
        //console.log(this.props.users)
        return(
        <>
        <Container>
            <Form onSubmit={this.handleLogin}>
                <FormField>
                    <Input
                    id={"email"}
                    label={"Email"}
                    type={"text"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                </FormField>
                <FormField>
                    <Input
                    id={"password"}
                    label={"Password"}
                    type={"password"}
                    onChange={(event) => {
                        console.log(event.target.id)
                        const stateToChange = {}
                        stateToChange[event.target.id] = event.target.value;

                        this.setState(stateToChange);
                    }}
                    ></Input>
                </FormField>
                <Button
                type={"submit"}
                >Submit</Button>
            </Form>
        </Container>
        </>
        )
    }
}
withRouter(Login); 