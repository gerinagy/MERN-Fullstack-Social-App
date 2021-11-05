import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography, Grid } from '@mui/material'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import useStyles from './styles'
import logo from '../../images/logo.png'
import memoriesLogo from '../../images/memories-Text.png'
import { LOGOUT } from '../../constans/actionTypes'

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: LOGOUT })
        history.push('/')
        setUser(null)
    }

    useEffect((user, logout) => {
        const token = user?.token

        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime())
                logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Grid container  >
                    <Grid item xs={12} md={6} justifyContent={{ xs: 'center', md: 'start' }} className={classes.brandContainer}>
                        <Link to='/' className={classes.heading} >
                        <img className={classes.image} src={logo} alt='memories' height='40' />
                        <img className={classes.image} src={memoriesLogo} alt='memoriesLogo' height='40' />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' justifyContent={{ xs: 'center', md: 'end' }} textAlign='right' alignItems='center' >
                        {user ? (
                            <Toolbar className={classes.toolbar}  >
                                <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                                <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} >Logout</Button>
                            </Toolbar>
                        ) : (
                            <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
                        )}
                    </Grid>
                </Grid>
            </AppBar>
        </>
    )
}

export default Navbar
