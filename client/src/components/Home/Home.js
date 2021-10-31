import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import { Container, Grow, Grid } from '@mui/material'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

const Home = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (

        <Grow in>
            <Container>
                <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} justifyContent={{ md: 'space-between', xs: 'center' }} alignItems={{ md: 'stretch', xs: 'center' }}  spacing={3}>
                    <Grid item xs={12} md={7} lg={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow >

    )
}

export default Home
