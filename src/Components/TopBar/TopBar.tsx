import { AppBar, createStyles, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

import Navigation from '../../Routes/Navigation'
import Login from '../Login/Login'
import { Search } from '../Search/Search'

const useStyles = makeStyles(() =>
    createStyles({
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    })
)

const TopBar = () => {
    const classes = useStyles()
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Navigation />
                <Search />
                <Login />
            </Toolbar>
        </AppBar>
    )
}

export default TopBar