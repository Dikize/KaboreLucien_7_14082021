import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const Login_form = ({emailValue, passwordValue, Change, Submit, errors}) => {
    return (
        <div className="container-fluid container-login pt-5">
            <h2 className="text-white text-center mb-4">Connexion</h2>
            <form className="login mx-auto" onSubmit={Submit}>
                {errors}
                <Grid item xs={12}>
                    <input
                        required
                        id="email"
                        name="email"
                        autoFocus
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
                        name="password"
                        type="password"
                        id="password"
                        value={passwordValue}
                        onChange={Change}
                        label="Mot de passe"
                        placeholder="Mot de passe"
                        className="form-control mb-4 mx-auto"
                        autoComplete="on"
                    />
                </Grid>
                <input type="submit" value="Connectez-vous" className="my-3 p-0" />
                <Grid className="text-center">
                    <Grid item>
                        <Link href="/signup" variant="body2" underline="hover">
                            {"Vous n'avez pas encore de compte ? Inscrivez vous"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login_form;