import { Container, Typography, Theme, createStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        witdh: '100%',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        textAlign: 'center'
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <Container maxWidth={false} color="primary" className={classes.footer}>
            <Typography variant="body1" color="inherit">
                © 2022 00h.ca
            </Typography>
        </Container>
    );
}


export default Footer;
