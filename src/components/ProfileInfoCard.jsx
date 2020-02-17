import React, {Component} from "react";
import {Card, CardContent, Grid, Avatar, Typography} from "@material-ui/core";

class ProfileInfoCard extends Component {


    constructor(props) {
        super(props);
        this.avatarStyles = {
            width: "10em",
            height: "10em"
        }
    }

    render() {
        // const classes=this.useStyles();
        return (
            <Card>
                <CardContent>
                    <Grid container direction={"row"}>
                        <Grid item xs={12} sm={12} alignContent={"center"}>
                            <Avatar style={this.avatarStyles}>MI</Avatar>
                        </Grid>
                        <Grid container xs={12} sm={12} justify={"center"} alignItems={"center"} direction={"column"}>
                            <Typography variant={"h4"} style={{fontWeight:"300"}}>
                                {this.props.name}
                            </Typography>
                            <Typography variant={"body1"} style={{fontWeight:"300"}}>
                                Age: {this.props.age}
                            </Typography>
                            <Typography variant={"body1"} style={{fontWeight:"300"}}>
                                City: {this.props.city}
                            </Typography>
                            {/*<Typography variant={"body1"} style={{fontWeight:"300"}}>*/}
                            {/*    Current State: trigger-happy*/}
                            {/*</Typography>*/}
                            <Typography variant={"body1"} style={{fontWeight:"300"}}>
                                Number of sessions: {this.props.sessionCount}
                            </Typography>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default ProfileInfoCard

