import React from 'react';
import axios from 'axios';
import {
    TextField,
    Button
} from '@material-ui/core';

class ActualForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            familyName: '',
            givenNames: '',
            sex: '',
            nationality: '',
            idDocType: '',
            policyNumber: '',

            organizationName: '',
            description: '',
            logoText: '',
            serialNumber: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        console.log('handleSubmit');

        const { 
            familyName,
            givenNames,
            sex,
            nationality,
            idDocType,
            policyNumber, 
        } = this.state;

        const SUBMIT_LINK = "http://localhost:3000/insurance-membership-pass"

        axios.post(SUBMIT_LINK,
            {
                familyName,
                givenNames,
                sex,
                nationality,
                idDocType,
                policyNumber,

                organizationName: 'test value organization Name',
                description: 'test value Description',
                logoText: 'test value logo Text',
                serialNumber: 'test value Serial Number'
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            },
        ).then((resp) => {
            console.log('handleSubmit response', resp);
        }).catch((err) => {
            console.err('handleSubmit error', err);
        });
    }

    handleChange (event) {
        console.log('handleChange: ', event.target.value);
        this.setState({
            name: event.target.value,
        });
    }

    render() {
        // const classes = useStyles();

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                {/* family name */}
                <div>
                    <TextField
                        label="Family Name"
                        name="familyName"
                        // className={classes.textField}
                        // value={values.email}
                        onChange={this.handleChange}
                        // onBlur={handleBlur}
                        margin="normal"
                    />
                </div>

                {/* given name */}
                <div>
                    <TextField
                        label="Given Names"
                        name="givenNames"
                        // className={classes.textField}
                        // value={values.email}
                        onChange={this.handleChange}
                        // onBlur={handleBlur}
                        margin="normal"
                    />
                </div>

                {/* sex */}
                <div>
                    <TextField
                        label="Sex"
                        name="sex"
                        // className={classes.textField}
                        // value={values.email}
                        onChange={this.handleChange}
                        // onBlur={handleBlur}
                        margin="normal"
                    />
                </div>

                {/* nationality */}
                <div>
                    <TextField
                        label="Nationality"
                        name="nationality"
                        // className={classes.textField}
                        // value={values.email}
                        onChange={this.handleChange}
                        // onBlur={handleBlur}
                        margin="normal"
                    />
                </div>

                {/* idDocType */}
                <div>
                    <TextField
                        label="idDocType"
                        name="idDocType"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>

                {/* policyNumber */}
                <div>
                    <TextField
                        label="policyNumber"
                        name="policyNumber"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
            </>
        );
    }
}

export default ActualForm;