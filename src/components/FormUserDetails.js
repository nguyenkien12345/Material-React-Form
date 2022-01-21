import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'

function FormUserDetails(props) {

    var {values,handleChangeFirstName,handleChangeLastName,handleChangeEmail,nextStep} = props

    const styles = {
        button:{
            margin: 15
        }
    }

    const CotinuePage = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details"/>
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChangeFirstName}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChangeLastName}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChangeEmail}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={CotinuePage}
                    />
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default FormUserDetails
