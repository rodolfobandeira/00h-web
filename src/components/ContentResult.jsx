import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    resultsPaper: {
        padding: theme.spacing(3),
        margin: theme.spacing(3)
    },
    dividerMargin: {
        margin: theme.spacing(3)
    }
}));

function ContentResult(props) {
    const classes = useStyles();

    return (
        <div>
            <Divider className={classes.dividerMargin} />
            <Paper className={classes.resultsPaper}>
                <Typography variant="overline">
                    Short URL:
                </Typography>

                <Typography variant="h3">
                    {props.shortUrl}
                </Typography>
            </Paper>
        </div>
    );
}

export default ContentResult;