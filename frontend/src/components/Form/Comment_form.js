import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../Comments/Comment.scss';

const Comment_form = ({commentValue, commentChange, commentSubmit}) => {
    
    return (
        <div className="container-comment-form">
            <form className="form mt-1" onSubmit={commentSubmit}>
            
                <TextField
                    name="comment"
                    id="comment"
                    multiline
                    placeholder="Commentez..."
                    value={commentValue}
                    onChange={commentChange}
                    className="input"
                    required 
                />
            
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mt-3 comment-form-btn">
                    Commenter
                </Button> 
            
            </form>
        </div>
    );
};

export default Comment_form;