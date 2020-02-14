import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';

class ForumQuestionCard extends Component {

    render() {
        return (
            <>

                {/*Card-Start*/}
                <Card>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.date}
                    />

                    <CardContent>
                        <Typography variant={"body1"} color={"textPrimary"}>
                            {this.props.question}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button>Answer</Button>
                        <Button>Watch</Button>
                    </CardActions>
                </Card>
                {/*Card-End*/}

            </>
        );
    };
}

export default ForumQuestionCard;
// export default connect(null,{CounselorSignIn});