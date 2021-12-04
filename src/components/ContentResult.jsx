import React from 'react';
import { Divider, Paper, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentReturnOutlinedIcon from '@material-ui/icons/AssignmentReturnOutlined';

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

    let overline = "";
    let copyToClipboardButton = "";
    let shortUrl = "";

    if (props.responseError !== "") {
        overline = "Error";
        shortUrl = `${props.responseError.response.statusText}`;
    } else {
        if (props.shortUrl !== "") {
            shortUrl = props.shortUrl;
            overline = "Short URL: "
            copyToClipboardButton = <Button
                color="primary"
                size="small"
                variant="contained"
                startIcon={<AssignmentReturnOutlinedIcon />}
                onClick={() => { navigator.clipboard.writeText(props.shortUrl) }}
            >copy</Button>
        }
    }


    return (
        <div>
            <Divider className={classes.dividerMargin} />
            <Paper className={classes.resultsPaper}>
                <Typography variant="overline">
                    {overline}
                </Typography>

                <Typography variant="h3">
                    <div style={{ width: '100%' }}>
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} width="100%">
                                {shortUrl}
                            </Box>
                            <Box p={1} flexShrink={1}>
                                {copyToClipboardButton}
                            </Box>
                        </Box>
                    </div>

                </Typography>
            </Paper>
        </div>
    );
}

export default ContentResult;
