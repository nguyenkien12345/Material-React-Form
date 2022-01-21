import { AppBar, RaisedButton, TextField } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'

function FormPersonalDetails(props) {

    var {values,handleChangeJob,handleChangeCity,handleChangeBio,nextStep,previousStep} = props

    const styles = {
        button:{
            margin: 15
        }
    }

    const CotinuePage = (e) => {
        e.preventDefault();
        nextStep();
    }

    const PreviousPage = (e) => {
        e.preventDefault();
        previousStep();
    }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField
                    hintText="Enter Your Job"
                    floatingLabelText="Job"
                    onChange={handleChangeJob}
                    defaultValue={values.job}
                />
                <br />
                <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChangeCity}
                    defaultValue={values.city}
                />
                <br />
                <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChangeBio}
                    defaultValue={values.bio}
                />
                <br />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={CotinuePage}
                />
                <RaisedButton
                    label="Previous"
                    primary={false}
                    style={styles.button}
                    onClick={PreviousPage}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default FormPersonalDetails
