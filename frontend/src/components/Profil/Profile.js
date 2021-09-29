import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button';
import NavBar from '../Header/navbar'

const Profile = ({profilePicture, lastname, firstname, email, biography, component, handleDelete}) => {
    return (

        <Fragment>
            <NavBar />
            <main className="container-profile" >
                <section className="section pb-5">
                    <div className="card card-profile col-sm-10 col-lg-6 12 mx-0 mx-sm-auto">
                        <div className="px-4">
                            <div className="row justify-content-center">
                                <div className="col">
                                    <div className="card-profile-image">

                                        {profilePicture ?  <img
                                            className="rounded-circle"
                                            src={profilePicture}
                                            alt="profil"
                                        /> : null}
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className="text-center mt-5">
                                <h3>
                                    {lastname}  {' '}  {firstname}
                                </h3>
                        
                                <div className="h6 mt-4">
                                    <i className="ni business_briefcase-24 mr-2" />
                                    {email}
                                </div>
                            </div>
                            <div className="mt-5 py-5 border-top text-center">
                                <div className="justify-content-center row">
                                    <div className="col">
                                        <p>
                                            {biography}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {component}
                        <Button className="btn w-50 mx-auto mb-3" variant="contained" color="secondary" onClick={handleDelete}>
                            Supprimer le compte
                        </Button>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default Profile