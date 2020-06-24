import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import AppointmentRequestCard from "../../components/counselor/AppointmentRequestCard";

const axios = require('axios').default;

class CounselorAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            appointments: null,
        };
    }

/*
    componentDidMount() {
        axios.get('http://localhost:8080/api/counselor/appointments/PENDING',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            this.setState({
                appointments:response.data,
            })
        }).catch((err) => {
            return err
        })

    }
*/

    componentDidMount(){
        axios.get('http://localhost:8080/api/counselor/appointments/ALL',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                this.setState({
                    appointments:response.data,
                })
            }).catch((err) => {
                return err
            })
    };

    render() {
        // this.fetchAppointments();
        return (
            <div>
                <CounselorNavBar></CounselorNavBar>

                <Grid container spacing={3}>
                    {this.state.appointments !== null ?
                            this.state.appointments.map((appointment, key) => (
                                <>

                                    {/*Card-Start*/}
                                    <AppointmentRequestCard keyValue={key} appointment={appointment}/>
                                    {/*Card-End*/}

                                </>
                            )) : <h3 style={{textAlign: 'center'}}> Loading...</h3>
                    }
                </Grid>
            </div>

        );
    };
}

export default CounselorAppointments;
