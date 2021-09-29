import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'

import userAPI from '../../Api/userAPI'
import SignUp from '../../components/Form/Log/Signup'
// import { Fragment } from 'react'
import './Log.scss'


class Signup extends Component {
    // Le state d'un composant à état est un objet JavaScript qui va contenir les données dynamiques du composant et déterminer son comportement.
    // Sa nature dynamique permet au composant de réagir aux changements de données et d'être intéractif.
    // le state ne peut être utilisé qu'avec les composants à état.
    state = {
        // init empty data
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        redirection: false,
        formIsValid: true,
        errors: {}
    }

    // mettre à jour la valeur saisies par de l’utilisateur. 
    handleChange = (event) => {
        // affectation de name et value par décomposition (destructuring)
        let { name, value} = event.target
        // Modification des state firstname,lastname,email,password,confirmPassword
        this.setState({ [name] : value })
        this.setState({ [name] : value })
    }

    verification = () => {
        const { firstname, lastname, email, password, confirmPassword, errors, formIsValid} = this.state

        if(!/^[A-Za-z]{2,}$/.test(firstname)){
            this.setState({formIsValid: false})
            errors["firstname"] = "Le prénom est incorrect";
        }
        if(!/^[A-Za-z]{2,}$/.test(lastname)){
            this.setState({formIsValid: false})
            errors["lastname"] = "Le nom est incorrect";
        }
        if(!/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/.test(email)){
            this.setState({formIsValid: false})
            errors["email"] = "L'email est incorrect";
        }
        if(!password || password.length < 8 ){
            this.setState({formIsValid: false})
            errors["password"] = "Le mot de passe doit contenir au moins 8 caractères";
        }
        if(confirmPassword !== password) {
            this.setState({formIsValid: false})
            errors["confirmPassword"] = "La confirmation du mot de passe est incorrect"
        }

        this.setState({errors})
        return formIsValid;
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { firstname, lastname, email, password} = this.state

        if(this.verification()) {
            userAPI.signup(firstname, lastname ,email, password)
            .then(() => {
                this.setState({redirection: true})
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            console.log("Form has errors")
        }

        this.setState({formIsValid: true})
    }

    render () {

        const {firstname, lastname, email, password, confirmPassword, redirection, errors} = this.state;

        if(localStorage.getItem('token')){
            return <Redirect to='/post' />
        }
        
        if(redirection){
            return <Redirect to='/'/>;
        }

        let errorArray = Object.keys(errors)
        .map(id => (
            <p className="errors" key={id}>
                {errors[id]}
            </p>
        ))

        return (

            <Fragment>
                <SignUp
                    firstnameValue={firstname}
                    lastnameValue={lastname}
                    email={email}
                    passwordValue={password}
                    cpasswordValue={confirmPassword}
                    Change={this.handleChange}
                    Submit={this.handleSubmit}
                    errors={errorArray}
                />
            </Fragment>
            

        )
    }
}

export default Signup