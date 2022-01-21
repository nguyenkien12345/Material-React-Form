import { AppBar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'

function Success() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="SUCCESS" />
                <h1>Thank For Your Submission</h1>
                <p>You Will Get An Email With Futher Instructions</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success
