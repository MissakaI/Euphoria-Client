import React, {Component} from 'react'
import {Button} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap';

import PropTypes from 'prop-types'; //for default exports
import validateInput from '../../validate/PatientSignUp';
import {Redirect} from 'react-router-dom';
import {useStyles} from '../../assets/Styles';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

class SignUpFormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            contactNumber: '',
            dob: '',
            nic: '',
            city: '',
            district: '',
            errors: {},
            isLoading: false
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    isValid = () => {
        const {errors, isValid} = validateInput(this.state);
        console.log(isValid);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log("shit");
        // axios.post('http://localhost:8080/api/users',{user:this.state});

        if (this.isValid()) {
            console.log("ho");
            this.setState({errors: {}});
            this.props.userSignUpRequest(this.state).then(
                () => {
                    return <Redirect to='http://google.com'/>;
                },
                ({data}) => this.setState({errors: data, isLoading: false})
            );
        }
    }

    render() {

        const {errors} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                {errors.firstname && <span style={{color: 'red'}} className="help-block">{errors.username}</span>}
                <Form.Group controlId="formusername">
                    <TextField
                        id="firstname"
                        label="First Name"
                        className={useStyles.textField}
                        type="text"
                        name="firstname"
                        autoComplete="firstname"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.firstname}
                    />
                </Form.Group>

                {errors.lastname && <span style={{color: 'red'}} className="help-block">{errors.username}</span>}
                <Form.Group controlId="formusername">
                    <TextField
                        id="lastname"
                        label="Last Name"
                        className={useStyles.textField}
                        type="text"
                        name="lastname"
                        autoComplete="lastname"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.lastname}
                    />
                </Form.Group>


                {errors.email && <span style={{color: 'red'}} className="help-block">{errors.email}</span>}
                <Form.Group controlId="formemail">
                    <TextField
                        id="email"
                        label="Email"
                        className={useStyles.textField}
                        type="email"

                        name="email"
                        autoComplete="email"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.email}

                    />
                </Form.Group>

                {errors.password &&
                <span style={{color: 'red'}} className="help-block">{errors.password}<br></br></span>}
                <Form.Group controlId="formpassword">
                    <TextField

                        id="password"
                        label="Password"
                        className={useStyles.textField}
                        type="password"
                        name="password"
                        autoComplete="email"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                </Form.Group>

                {errors.passwordConfirmation &&
                <span style={{color: 'red'}} className="help-block">{errors.password}<br></br></span>}
                <Form.Group controlId="formpassword">
                    <TextField

                        id="passwordConfirmation"
                        label="Re-type Password"
                        className={useStyles.textField}
                        type="password"
                        name="passwordConfirmation"
                        autoComplete="password"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.passwordConfirmation}
                    />
                </Form.Group>

                {errors.contactNumber && <span style={{color: 'red'}} className="help-block">{errors.username}</span>}
                <Form.Group controlId="formusername">
                    <TextField
                        id="contactNumber"
                        label="Contact Number"
                        className={useStyles.textField}
                        type="text"
                        name="contactNumber"
                        autoComplete="contactNumber"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.contactNumber}
                    />
                </Form.Group>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="dob"
                        label="Date of birth"
                        value={this.state.dob}
                        onChange={this.onChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                {errors.contactNumber && <span style={{color: 'red'}} className="help-block">{errors.username}</span>}
                <Form.Group controlId="formusername">
                    <TextField
                        id="contactNumber"
                        label="Contact Number"
                        className={useStyles.textField}
                        type="text"
                        name="contactNumber"
                        autoComplete="contactNumber"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.contactNumber}
                    />
                </Form.Group>
                {errors.contactNumber && <span style={{color: 'red'}} className="help-block">{errors.username}</span>}
                <Form.Group controlId="formusername">
                    <TextField
                        id="contactNumber"
                        label="Contact Number"
                        className={useStyles.textField}
                        type="text"
                        name="contactNumber"
                        autoComplete="contactNumber"
                        margin="none"
                        variant="outlined"
                        style={{width: '50vh'}}
                        onChange={this.onChange}
                        value={this.state.contactNumber}
                    />
                </Form.Group>
                <Form.Group controlId="formbutton">
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width: '10vh'}}
                        type="submit"
                    >
                        Send
                    </Button>
                </Form.Group>

            </Form>
        )
    }
}

SignUpFormUser.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired
}

export default SignUpFormUser;