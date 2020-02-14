import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Container, Grid} from "@material-ui/core";
import AppoinmentCard from "../../components/counselor/AppoinmentCard";
import axios from 'axios';

class CounselorAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

     componentDidMount() {
         // axios.get(`http://localhost:8080/api/counselor/appointments/1`)
         //    .then(res => {
         //        const persons = res.data;
         //        // this.setState({ persons });
         //        console.log(persons);
         //        this.onFetchComplete(persons);
         //    })

        // fetch("http://localhost:8080/api/counselor/appointments/1")
        //     // .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items
        //             });
        //             console.log(result);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //             console.log(error);
        //         }
        //     )
    }

    onFetchComplete(res){
        for (let i=0; i<res.length; i++){
            var obj = res[i];


        }
    }

    render() {
        return (
            <>

                <CounselorNavBar></CounselorNavBar>

                <Container>
                    <Grid container>
                        <AppoinmentCard
                            customer={"Missaka Iddamalgoda"}
                            username={"@Misidda"}
                            time={"8:00 AM"}
                            date={"2019-11-20"}
                            status={"Pending"}
                        >
                        </AppoinmentCard>
                    </Grid>
                </Container>


            </>
        );
    };
}

export default CounselorAppointments;
