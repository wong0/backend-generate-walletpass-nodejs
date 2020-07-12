import React from 'react';
import axios from 'axios';
import { Grid, Paper, makeStyles, TextField, Button } from '@material-ui/core';
import ActualForm from './ActualForm';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
        flexGrow: 1
    },
    paper: {
        width: 340,
        padding: 40,
        backgroundColor: '#ebebeb'
    },
}));

export default function WalletPassForm() {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item className={classes.root} xs={12}>
                <Grid container justify='center' spacing={2}>
                    <Grid key={1} item>
                        <Paper className={classes.paper} elevation={2} >
                            <ActualForm />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
