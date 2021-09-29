import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Modal from 'react-modal'
import '../../pages/Article.scss';

Modal.setAppElement('#root')
const Article_form = ({buttonContent, contentValue, contentChange, attachmentChange, fileName, Submit}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <article className="container-fluid pt-4">
            <div className="container-article-form d-flex col-12 col-sm-10 col-md-6 d-flex pt-4 mx-sm-auto">
                <div className="mx-auto">
                    <TextField
                        onClick={() => setModalIsOpen(true)}
                        className="mx-auto mb-4 input-open-modal"
                        placeholder="Que voulez vous dire ?"
                    />
                    <PhotoCamera 
                        onClick={() => setModalIsOpen(true)}
                        className="icon-camera mt-1 mx-3"
                    />
                </div>
                
                <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setModalIsOpen(false)} 
                className="modal-container p-5"          
                >
                    <div className="col-12 col-sm-8 col-md-6 modal-item-container">

                        <h2 className="modal-title text-center text-white my-4">Ma publication</h2>

                        <form className="col-8 container-glassmorph mx-auto pb-2" onSubmit={Submit}>
                            <Grid container className="d-flex justify-content-center" spacing={0}>
                                <Grid item xs={8}>
                                    <TextField
                                    name="content"
                                    id="content"
                                    variant="outlined"
                                    multiline
                                    placeholder="Que voulez vous dire ?"
                                    value={contentValue}
                                    onChange={contentChange}
                                    required
                                    className="textFiel-article"
                                    />
                                </Grid>
                                <input
                                    accept="image/*"
                                    className="d-none"
                                    id="attachment"
                                    name="attachment"
                                    type="file"
                                    onChange={attachmentChange}
                                />
                                <label htmlFor="attachment">
                                    <Button variant="contained" color="primary" component="span" className="mt-2 ml-2">
                                        <PhotoCamera />
                                    </Button>
                                </label>

                                {fileName}
                                
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="mx-auto mt-5">
                                    {buttonContent}
                                </Button> 

                            </Grid>
                        </form>
                        <div className="d-flex flex-column mt-5">
                            <button className="mx-auto modal-btn-close button-glassmorph" onClick={() => setModalIsOpen(false)}>Ferme</button>
                        </div>
                    </div>
                </Modal>

            </div>
        </article>
        
    );
};

export default Article_form;