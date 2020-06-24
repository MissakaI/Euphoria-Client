import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Grid, Typography} from "@material-ui/core";
import PatientRecordCard from "../../components/counselor/PatientRecordCard";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import AppointmentRequestCard from "../../components/counselor/AppointmentRequestCard";
const axios = require('axios').default;
// import * as actions from "../../actions";
// import {connect} from "react-redux";

class CounselorViewPatientRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records:null,
            // error: null,
            // isLoaded: false,
            // items: []
        };

        // this.props.getPatientRecords("userID");
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/counselor/patient-records/'+this.state.user.id,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            this.setState({
                records:response.data,
            })
        }).catch((err) => {
            return err
        })
    };

    render() {
        return (
            <>

                <CounselorNavBar></CounselorNavBar>

                <Grid container direction={"column"} style={{padding: "1em"}}>
                    <Grid container>
                        <Grid style={{marginBottom: "1em"}}>
                            <Typography variant={"h1"} style={{fontSize: "2em"}}>
                                {"Patient Records"}
                            </Typography>
                            {/*<Typography variant={"h2"} style={{fontSize: "1em"}}>
                                {"Missaka Iddamalgoda"}
                            </Typography>*/}
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} spacing={1}>
                        <Grid item xs={12} sm={3}>
                            {/** TODO: pass props to these  */}
                            <ProfileInfoCard ></ProfileInfoCard>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            {this.state.records !== null ?
                                this.state.records.map((record, key) => (
                                    <>

                                        {/*Card-Start*/}
                                        <PatientRecordCard record={record}/>
                                        {/*<AppointmentRequestCard keyValue={key} appointment={appointment}/>*/}
                                        {/*Card-End*/}

                                    </>
                                )) : <h3 style={{textAlign: 'center'}}> Loading...</h3>
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </>
        );
    };

}

// const mapStateToProps = state => {
//     return {
//         patientRecords: state.counselorReducer.patientRecords,
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         getPatientRecords: (user) => dispatch(actions.getPatientRecords(user))
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounselorViewPatientRecords);

export default CounselorViewPatientRecords;

