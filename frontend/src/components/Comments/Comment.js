import React from 'react';
import {Card, CardHeader, CardContent, Typography, Button} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import './Comment.scss'

    export default function Comment({isAdmin, creator, profilePicture, name, comment, handleDeleteComment}) {

    const canUpdate = () => {
        if(parseInt(localStorage.getItem("userId")) === creator ||  isAdmin ){
        return true
        }
        return false
    }

    return (
        <Card variant="outlined" className="show-comment-card m-2">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={profilePicture} className="" />
                }

                title={
                    <div className="mr-5">{name}</div>
                }
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {comment}
                </Typography>
                
            </CardContent>

            {canUpdate() ? 
            <Button className="d-flex mx-auto" color="secondary" onClick={handleDeleteComment}>
                supprimer
            </Button> : null}
        </Card>
    );
}
