import * as React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'

const Posts = ({ setCurrentId }) => {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)

    console.log(posts.map(item => item.title))

    return (
        (!posts.lenght === 0) ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
