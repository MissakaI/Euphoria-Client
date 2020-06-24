import React, {Component} from 'react';
import "./CounselorSignIn.scss";
import {Grid, Card, CardContent, TextField, Typography, Button} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUploadOutlined";
import logo from "../../assets/eu-logo.png";
import {connect} from 'react-redux';
import * as actions from "../../actions/index";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};


class CounselorSignIn extends Component {

    constructor(props) {
        super(props);
        this.setState({
            isSignUp: props.isSignUp
        })
    };

    state = {
        loginUsername:null,
        loginPassword:null,
        name: null,
        username: null,
        password: null,
        confirmPassword: null,
        email: null,
        speciality: null,
        hospital: null,
        city: null,
        picName: null,
        signIn: null,
        isSignUp: false,
        description:null,
        slmcNumber:null,
        errors: {
            name: '',
            email: '',
            password: '',
            loginPassword:'',
            confirmPassword:'',
            slmcNumber:'',
            loginUsername:'',
        }
    };

    signIn = () => {
        console.log(this.state.name, this.state.password);
        const signInCredentials = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }
        this.props.signIn(signInCredentials);
    };

    signUp = () => {

        // if(this.state.password === this.state.confirmPassword){
            const loginCredentials = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };

            const signUpCredentials = {
                name:this.state.name,
                username: this.state.username,
                description: this.state.description,
                specialty: this.state.speciality,
                hospital: this.state.hospital,
                city: this.state.city,
                picName : this.state.picName.split('\\')[2],
                loginCredentials: loginCredentials,
                slmcNumber:this.state.slmcNumber
            };

            this.props.signUp(signUpCredentials);

            window.location.reload();
        // }else{
        //     alert('Passwords are not matched!')
        // }


    };

    changeMode = () => {
        this.setState({
            isSignUp: !this.state.isSignUp
        });
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
        // console.log(e.target.value.split('\\')[2]);


        const name = e.target.id;
        const value = e.target.value;

        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    value.length < 0
                        ? 'User Name must not be null'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'loginPassword':
                errors.password =
                    value.length < 8
                        ? 'Password is empty!'
                        : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword=
                    this.state.confirmPassword !== this.state.password
                        ? 'Passwords are not matched!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});
    };

    componentDidUpdate() {
        if (this.props.signedIn) {
            this.props.history.push("/counselor/appointments");
        }
    };


    render() {
        const {errors} = this.state;

        const error = {
            color: '#db2269',
            fontSize: '0.825em',
            display: 'relative'
        };

        let card
        if (!this.state.isSignUp) {
            card =
                <>
                    {/* Begin:Sign-In Card */}
                    <Grid id={"CrdSgnIn"} item xs={12} sm={8} md={6} lg={4}>
                        <Card className={'transparent'}>
                            <CardContent>
                                <Grid container id={'logoGrid'} className={"imgRaised"}>
                                    <Grid item>
                                        <img src={logo}/>
                                    </Grid>

                                    <Grid item xs={12} className={'brandText'}>
                                        <Typography>Euphoria</Typography>
                                    </Grid>
                                </Grid>
                                <hr/>
                                <Grid container id={'fieldGrid'} spacing={2}>
                                    <Grid item xs={8}>
                                        <TextField id={'loginUsername'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'Username'}
                                                   fullWidth
                                                   noValidate
                                        />
                                        {errors.loginUsername.length === 0 &&
                                        <span style={error}>{errors.loginUsername}</span>}
                                    </Grid>

                                    <Grid item xs={8}>
                                        <TextField
                                            id={'loginPassword'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            type={'password'}
                                            label={'Password'}
                                            fullWidth/>
                                        {errors.loginPassword.length > 0 &&
                                        <span style={error}>{errors.loginPassword}</span>}
                                    </Grid>

                                    <Grid item xs={12} sm={10} id={'buttonGrid'}
                                          className={'verticalCenter spaceBetween'}>
                                        <Button> Forgot your password?</Button>
                                        <Button
                                            variant={"outlined"}
                                            color={"primary"}
                                            id={'signInBtn'}
                                            type={"submit"}
                                            onClick={() => this.signIn()}
                                        >
                                            Sign In
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12} className={'horizontalCenter'}>
                                        <Button className={'btn-small'} onClick={() => this.changeMode()}>Not a member?
                                            Join as a counselor
                                            today.</Button>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* End:Sign-In Card */}
                </>
        } else {
            card =
                <>
                    {/* Begin:Sign-Up Card */}
                    <Grid id={"CrdSgnUp"} item xs={12} sm={8} md={6} lg={4}>
                        <Card className={'transparent'}>
                            <CardContent>
                                <Grid container id={'logoGrid'} className={"imgRaised"}>
                                    <Grid item xs={6}>
                                        <img src={logo}/>
                                    </Grid>

                                    <Grid item xs={6} className={'brandText'}>
                                        <Typography>Euphoria</Typography>
                                    </Grid>

                                </Grid>
                                <hr/>
                                <Grid container id={'fieldGrid'} spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField id={'name'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'Name'}
                                                   fullWidth
                                                   type={'text'}
                                                   noValidate
                                        />
                                        {errors.name.length > 0 &&
                                        <span style={error}>{errors.name}</span>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField id={'email'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'Email'}
                                                   fullWidth
                                                   type={'email'}
                                        />
                                        {errors.email.length > 0 &&
                                        <span style={error}>{errors.email}</span>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField id={'slmcNumber'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'SLMC Number'}
                                                   fullWidth
                                                   type={'text'}
                                        />
                                        {errors.slmcNumber.length > 0 &&
                                        <span style={error}>{errors.slmcNumber}</span>}
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            id={'speciality'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            label={'Specialized Field'}
                                            fullWidth/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            id={'hospital'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            label={'Hospital/Work'}
                                            fullWidth/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            id={'city'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            label={'City'}
                                            fullWidth/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <input
                                            accept="image/*"
                                            id="picName"
                                            type="file"
                                            onChange={e => this.handleChange(e)}
                                        />
                                        <label htmlFor="picName">
                                            <Button
                                                variant="outlined"
                                                component="span"
                                                fullWidth={true}
                                                size={"large"}
                                                startIcon={<CloudUploadIcon/>}
                                            >
                                                Profile Photo
                                            </Button>
                                        </label>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            id={'description'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            label={'Description'}
                                            multiline
                                            rowsMax={'3'}
                                            fullWidth/>
                                    </Grid>

                                    {/*<Grid item xs={6}>*/}
                                    {/*    <TextField*/}
                                    {/*        id={'password'}*/}
                                    {/*        onChange={e => this.handleChange(e)}*/}
                                    {/*        // className={'txtFld-small'}*/}
                                    {/*        variant={'outlined'}*/}
                                    {/*        label={'Password'}*/}
                                    {/*        fullWidth*/}
                                    {/*        type={'password'}*/}
                                    {/*    />*/}
                                    {/*</Grid>*/}

                                    {/*<Grid item xs={6}>*/}
                                    {/*    <TextField*/}
                                    {/*        id={'confirm_password'}*/}
                                    {/*        onChange={e => this.handleChange(e)}*/}
                                    {/*        // className={'txtFld-small'}*/}
                                    {/*        variant={'outlined'}*/}
                                    {/*        label={'Confirm Password'}*/}
                                    {/*        fullWidth*/}
                                    {/*        type={'password'}*/}
                                    {/*    />*/}
                                    {/*</Grid>*/}

                                    <Grid item xs={6}>
                                        <TextField id={'username'}
                                                   onChange={e => this.handleChange(e)}
                                                   className={'txtFld-small'}
                                                   variant={'outlined'}
                                                   label={'Username'}
                                                   fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            id={'password'}
                                            onChange={e => this.handleChange(e)}
                                            className={'txtFld-small'}
                                            variant={'outlined'}
                                            type={'password'}
                                            label={'Password'}
                                            fullWidth/>
                                    </Grid>

                                    <Grid item xs={12} sm={10} id={'buttonGrid'}
                                          className={'verticalCenter spaceBetween'}>
                                        <Button
                                            onClick={() => this.changeMode()}
                                        >
                                            Already a member. Sign In instead?
                                        </Button>
                                        <Button
                                            variant={"outlined"}
                                            color={"primary"}
                                            id={'signUpBtn'}
                                            type={"submit"}
                                            onClick={() => this.signUp()}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>


                                    <Grid item xs={12} className={'horizontalCenter'}>
                                        {/*<Button className={'btn-small'}>Not a member? Join as a counselor*/}
                                        {/*    today.</Button>*/}

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* End:Sign-In Card */}
                </>
        }
        return (
            <>
                <Grid container id="rootGrid">
                    {card}
                </Grid>
            </>
        );
    };
}

const mapStateToProps = state => {
    return {
        signedIn: state.counselorReducer.signedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (state) => dispatch(actions.signIn(state)),
        signUp: (state) => dispatch(actions.signUp(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounselorSignIn);
// export default connect(null,{CounselorSignIn});
