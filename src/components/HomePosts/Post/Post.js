import React from 'react' ;
import useStyles from './styles'
import { Card , CardActions , CardContent , CardMedia , Button , Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import postimage from '../../../images/post.png';
import { useHistory , useLocation } from 'react-router-dom';


const Post = ( {post} ) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            
            <CardMedia className={classes.media} image={postimage} title={post.title}/>
            <CardContent>
            <Typography className={classes.title} variant="h6" >{post.title}<br/></Typography>
            <Typography className={classes.details} variant="body2" gutterBottom>{post.body}</Typography>
            </CardContent>
                <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <ThumbUpAltIcon fontSize="medium" />
                    Like
                </Button>
                <Button size="small" color="primary">
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                </CardActions>
        </Card>
    );
}

export default Post ;