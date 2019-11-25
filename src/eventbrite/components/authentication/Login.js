/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {withRouter} from "react-router";
import { Input,Container, Form, Button, FormField } from 'semantic-ui-react'


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
        console.log(event.target.id);
        this.setState(stateToChange); 
    }

    // check for the current user and set sessionstorage 
    handleLogin = (event) => {

        event.preventDefault()
        let user = this.props.users.find(user => {
            return (this.state.email.toLowerCase() === user.email.toLowerCase()) && (this.state.password === user.password);
        })


        //handle all the field validity 
        if(this.state.email === ""){
            alert("Please enter your email!");
        }else if(this.state.password === ""){
            alert("Please enter your password!");
        }else if(this.state.password ==="" && this.state.email ===""){
            alert("Please enter your credentials!");
        }else if(user !== undefined){
            // there is a match 
            this.setState({activeUser: Number(sessionStorage.setItem("userId", user.id))});
            this.props.history.push("/home");
        }
    }
    
    render(){
        console.log(this.props.users)
        return(
        <>
        <Container>
            <Form onSubmit={this.handleLogin}>
                <FormField>
                    <Input
                    label={"Email"}
                    type={"text"}
                    onChange={this.handleFieldChange}
                    ></Input>
                </FormField>
                <FormField>
                    <Input
                    label={"Password"}
                    type={"password"}
                    onChange={this.handleFieldChange}
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