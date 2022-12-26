import { Divider, Paper, Typography, Button, Box } from '@mui/material';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import { ReactElement } from 'react';
import {IResponseError} from '../interfaces/IResponseError';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  contentResult: {
    marginTop: '2rem',
  }
}));

interface Props {
    responseError: IResponseError,
    shortUrl: string
}

function ContentResult({ shortUrl, responseError}: Props) {
    let overline = "";
    let copyToClipboardButton: ReactElement | null = null;

    if (responseError?.response?.statusText !== "") {
        overline = "Error";
        shortUrl = `${responseError?.response?.statusText}`;
    } else {
        if (shortUrl !== "") {
            overline = "Short URL: "
            copyToClipboardButton = <Button
                color="primary"
                size="small"
                variant="contained"
                startIcon={<AssignmentReturnOutlinedIcon />}
                onClick={() => { navigator.clipboard.writeText(shortUrl) }}
            >copy</Button>
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.contentResult}>
            <Divider />
            <Paper>
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
