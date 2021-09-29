import React from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField'

const updateProfile_form = ({biographyValue, biographyChange, profilePictureChange, fileName, Submit}) => {

    return (
        <section className="px-0 px-md-4 mt-4 mb-5">
            <div className="d-flex flex-column pt-4 container-update-profil">
                <form className="w-100 mt-2" onSubmit={Submit}>
                    <div className="form-item">
                        <TextField
                        name="biography"
                        id="biography"
                        className="TextField w-75 ml-auto"
                        variant="outlined"
                        multiline
                        placeholder="Biographie..."
                        value={biographyValue}
                        onChange={biographyChange}
                        />
                        <input
                            accept="image/*"
                            className="d-none"
                            id="profilePicture"
                            name="profilePicture"
                            type="file"
                            onChange={profilePictureChange}
                        />
                        <label htmlFor="profilePicture">
                            <Button variant="contained" color="primary" component="span" className="ml-2 mt-2">
                                <PhotoCamera />
                            </Button>
                        </label>

                        {fileName}
                        
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="mx-auto my-3 btn">
                            Mettre à jour
                        </Button> 

                    </div>
                </form>
            </div>
        </section>
    
    );
};

export default updateProfile_form;