import { AppBar, RaisedButton } from 'material-ui'
import { List, ListItem } from 'material-ui/List'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'


function Confirm(props) {

    var { values,nextStep,previousStep } = props

    const styles = {
        button: {
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
                <AppBar title="Confirm User Data" />
                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={values.firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={values.lastName}
                    />
                    <ListItem
                        primaryText="Email"
                        secondaryText={values.email}
                    />
                    <ListItem
                        primaryText="Job"
                        secondaryText={values.job}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={values.city}
                    />
                    <ListItem
                        primaryText="Bio"
                        secondaryText={values.bio}
                    />
                </List>
                <RaisedButton
                    label="Confirm"
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

export default Confirm
