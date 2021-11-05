import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPostsBySearch } from '../../redux/actions/posts'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'
import useStyles from './styles'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination/Pagination'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [currentId, setCurrentId] = useState(null)
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const query = useQuery()
    const history = useHistory()
    const page = query.get('page') || 1
    // const searchQuery = query.get('searchQuery')

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            e.preventdefault()
            searchPost()
        }
    }
    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            history.push('/')
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag])
    }
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

    return (

        <Grow in>
            <Container maxWidth='xl' >
                <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }} justifyContent={{ md: 'space-between', xs: 'center' }} alignItems={{ md: 'stretch', xs: 'center' }} spacing={3} className={classes.gridContainer} >
                    <Grid item xs={12} md={7} lg={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={4} >
                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                            <TextField
                                name='search'
                                variant='outlined'
                                label='Search Memories'
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }} />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label='Search Tags'
                                variant='outlined'
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6} style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }} >
                            <Pagination page={page} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow >

    )
}

export default Home
