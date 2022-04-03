import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 600,
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography component="h1" variant="h6" className={classes.title}>
                        <Link href="/" color="inherit">
                            00h.ca
                        </Link>

                        <div>
                            <Typography variant="subtitle2">
                                URL shortner
                            </Typography>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;



