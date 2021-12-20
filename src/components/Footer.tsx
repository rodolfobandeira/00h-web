import React from 'react';
import { Container, Typography, Theme, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            position: 'fixed',
            left: 0,
            bottom: 0,
            witdh: '100%',
            color: theme.palette.primary.contrastText,
            backgroundColor: '#37474F', // TO DO: Figure out why using "theme.palette.primary.main" doesn't work
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            textAlign: 'center'
        }
    })
);


function Footer(theme: Theme) {
    const classes = useStyles(theme);

    return (
        <Container maxWidth={false} color="primary" className={classes.footer}>
            <Typography variant="body1" color="inherit">
                © 2021 00h.ca
            </Typography>
        </Container>
    );
}


export default Footer;
