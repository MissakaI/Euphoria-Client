import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EuphoriaEditor from "../EuphoriaEditor";
import {Editor} from 'react-draft-wysiwyg';

class PatientRecordCard extends Component {

    constructor(props) {
        //compatible props: title,timestamp, recordEditorState, prescriptionEditorState
        super(props);
        this.state = {
            record:props.record,
            recordEditorState:props.record.description,
            prescriptionEditorState:props.record.prescription
        };
    }

    onRecordEditorStateChange = (editorState) => {
        this.setState({
            recordEditorState:editorState,
        });
    };

    prescriptionEditorStateChange = (editorState) => {
        this.setState({
            prescriptionEditorState:editorState,
        });
    };

    render() {
        let title="New Patient Record";
        if (this.props.title){
            title=this.props.title;
        }

        let now=new Date(new Date()+"UTC").toISOString().split('T');
        let timestamp=now[0]+" "+now[1].split(':')[0]+':'+now[1].split(':')[1];
        if (this.props.timestamp){
            timestamp=this.props.timestamp;
        }

        let recordEditorState=null;
        if (this.state.recordEditorState){
            recordEditorState=this.props.recordEditorState;
        }

        let prescriptionEditorState=null;
        if (this.props.prescriptionEditorState){
            prescriptionEditorState=this.props.prescriptionEditorState;
        }

        return (
            <Grid item>

                {/*Card-Start*/}
                <Card>

                    <CardContent>
                        <Grid item className={"header"}>
                            <Typography variant={"subtitle1"}>
                                {timestamp}
                            </Typography>
                            <Typography variant={"h3"} style={{fontSize: "1.5em"}}>
                                {title}
                            </Typography>
                        </Grid>
                        <hr style={{border:"1px solid",height:0}}/>
                        <Grid item className={"record"}>
                            <Typography variant={"subtitle1"} color={"textSecondary"}>
                                Record
                            </Typography>
                            <EuphoriaEditor defaultState={recordEditorState} onEditorStateChange={this.onRecordEditorStateChange}/>
                        </Grid>
                        <hr/>
                        <Grid item className={"prescription"}>
                            <Typography variant={"subtitle1"} color={"textSecondary"}>
                                Prescription
                            </Typography>
                            <EuphoriaEditor defaultState={prescriptionEditorState} onEditorStateChange={this.prescriptionEditorStateChange}/>
                        </Grid>
                    </CardContent>

                    {/*<CardActions style={{float: "right"}}>*/}
                    {/*    <Button>Read More</Button>*/}
                    {/*</CardActions>*/}
                </Card>
                {/*Card-End*/}

            </Grid>
        );
    };

}

export default PatientRecordCard;