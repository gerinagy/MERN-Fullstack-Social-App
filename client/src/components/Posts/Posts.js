import * as React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid, Typography } from '@mui/material'

const Posts = ({ setCurrentId }) => {
    const classes = useStyles()
    const { posts, isLoading } = useSelector((state) => state.posts)
    
    if(!posts.length && !isLoading) return <Typography variant='h5'>We don't have posts now.</Typography>

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts