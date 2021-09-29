import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const Signup_form = ({firstnameValue, lastnameValue, emailValue, passwordValue, cpasswordValue , Change, Submit, errors}) => {
    return (
        <article className="container-fluid container-signUp py-5">
            <h2 className="text-white text-center mb-4">Bienvenue à groupomania</h2>
            <h2 className="text-white text-center mb-4">Inscription</h2>

            <form className="signUp mx-auto" onSubmit={Submit}>
                {errors}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <input
                            autoFocus
                            required
                            id="firstname"
                            name="firstname"
                            type="text"
                            value={firstnameValue}
                            // mettent à jour le state par rapport aux saisies de l’utilisateur. (composant contrôlé)
                            // Change vient de handleChange qui est déclenché à chaque frappe pour mettre à jour l’état local React, la valeur affichée restera mise à jour au fil de la saisie.
                            onChange={Change}
                            label="Prénom"
                            placeholder="Prénom"
                            className="form-control mb-4 mx-auto"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input
                            required
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={lastnameValue}
                            onChange={Change}
                            label="Nom"
                            placeholder="Nom"
                            className="form-control mb-4 mx-auto"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            value={emailValue}
                            onChange={Change}
                            label="Email"
                            placeholder="Email"
                            className="form-control mb-4 mx-auto"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            required
                            id="password"
                            name="password"
                            type="password"
                            value={passwordValue}
                            onChange={Change}
                            label="Mot de passe"
                            placeholder="Mot de passe"
                            className="form-control mb-4 mx-auto"
                            autoComplete="on"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            required
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={cpasswordValue}
                            onChange={Change}
                            label="Confirmation de mot de passe"
                            placeholder="Confirmation de mot de passe"
                            className="form-control mb-4 mx-auto"
                            autoComplete="on"
                        />
                    </Grid>
                </Grid>
                <input type="submit" variant="contained" value="Inscription" className="my-3 p-0"/>

                <Grid className="text-center">
                    <Grid item>
                        <Link href="/" variant="body2" underline="hover">
                            Vous avez déjà un compte ? Connectez-vous
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </article>
    );
};

export default Signup_form;