import React,{Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {FormControl,InputGroup,Accordion,Card,Button,Form} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {userNewPost} from '../../actions/UserActions';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'blue',
  },
}));



function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
   
    <Button variant="outline-success" onClick={decoratedOnClick}>{children}</Button>
  );
}



//  function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Fragment>

//       <Card className={classes.card}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={classes.avatar}>
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Shrimp and Chorizo Paella"
//           subheader="September 14, 2016"
//         />
      
//         <CardContent>
//           <Typography variant="h6"  component="p">
//             This impressive paella is a perfect party dish and a fun meal to cook together with your
//             guests. Add 1 cup of frozen peas along with the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             {/* <ShareIcon /> */}
//           </IconButton>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             <Typography paragraph>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//               minutes.
//             </Typography>
//             <Typography paragraph>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//               heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//               browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//               and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//               pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//               saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
            
//           </CardContent>
//         </Collapse>


//       </Card>
//     </Fragment>
//   );
// }
class PostComponentUser extends Component{
  constructor(props){
    super(props);
    this.state={
       'postBody':'',
       'checkbox':[]
    }
  }
  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  toggleCheckBox=(e)=>{
    console.log(e.target.name.type)
    // if(this.state.checkbox.includes(e.target.name)){
    //   console.log("have");
    // }else{
    //   console.log("do not have");
      
    // }
    
  }
  onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.postBody);
    this.props.userNewPost(this.state);
  }
  render(){
    return(
      <Fragment>

      <Accordion defaultActiveKey="0">
          <Card>
              <Card.Header>
                <CustomToggle eventKey="0">Add New Post</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control name="postTitle" type="text" placeholder="Title" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control name="postBody" as="textarea" rows="3" placeholder="Enter your thoughts" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label><h4>How do you feel</h4></Form.Label>
                        {['Depressed', 'Anxious','Suicidal',"I don't know"].map(emotion => (
                          <div key={`inline-${emotion}`} className="mb-3">
                            <Form.Check inline name={emotion} onChange={this.toggleCheckBox} label={emotion} type="checkbox" id={`inline-${emotion}-1`} />
                          </div>
                        ))}
                    </Form.Group>
                    <Form.Group>
                      <Button variant="primary" type="submit">
                        Post
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
        
          </Card>
        </Accordion>
      </Fragment>

    );
  }
}
PostComponentUser.propTypes={
  userNewPost : PropTypes.func.isRequired
}

export default connect(null,{userNewPost})(PostComponentUser);