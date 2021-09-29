import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Comments from '../Comments/Comments'
// import './Article.scss'

const Article = ({isAdmin, creator, profilePicture, name, likes, attachment, content, handleLikeClick, commentFormComponent, handleDelete, handleUpdate, articleId}) => {
        const [expanded, setExpanded] = React.useState(false);
    
        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        const canUpdate = () => {
            if(parseInt(localStorage.getItem("userId")) === creator){
                return true
            }
            return false
        }
    
    
        return (
            <Card className="col-12 col-sm-10 col-md-8 mx-auto my-5 p-2 p-sm-4 container-card-article">
    
                {/* Name / ProfilPicture */}
    
                <CardHeader 
                    avatar={ <Avatar aria-label="recipe" className="" src={profilePicture}></Avatar> }
                    title={name} 
                />
    
                {/* END Name / ProfilPicture */} 
    
                {/* Content */}
    
                {attachment ? 
                    <CardMedia
                    className="mx-auto mt-2 img-Article"
                    image={attachment}
                    /> : null
                }
            
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className="">
                        {content}
                    </Typography>
                </CardContent>
    
                {/* END Content */}
    
                <CardActions disableSpacing className="container-card-icon">
                    <IconButton aria-label="likes" onClick={handleLikeClick}>
                        <FavoriteIcon className="mr-2" color="secondary"/> {likes}
                    </IconButton>
    
                    <IconButton
                    className={ expanded ? "expand ml-auto" : "expandOpen ml-auto" }
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show comments" >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </CardActions>
    
                
                {/* Comments */}
    
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Comments articleId={articleId}/>
                    
                </Collapse>
    
                {/* END Comments */}
    
                {commentFormComponent}
    
                {canUpdate() ? <div className="d-flex justify-content-around">
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon color="secondary" style={{ fontSize: 40 }} />
                    </IconButton>
    
                    <IconButton onClick={handleUpdate}>
                        <UpdateIcon style={{ color: 'green', fontSize: 40 }} />
                    </IconButton>
                    </div> : null
                }
    
                {isAdmin ? 
                    <div className="Actions">
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon color="secondary" style={{ fontSize: 40 }} />
                        </IconButton>
                    </div>: null
                }
    
            </Card>
        );
};

export default Article;