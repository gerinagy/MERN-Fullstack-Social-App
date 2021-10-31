import * as React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@mui/material'

const Posts = ({ setCurrentId }) => {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
    const sortedPosts = posts.slice().sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
    console.log(sortedPosts.length)
    return (
        !sortedPosts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {sortedPosts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts


// {(posts.lenght === 0) ? <CircularProgress /> : (
//     <Grid className={classes.container} container alignItems='stretch' spacing={3}>
//         {posts.map(post => (
//             <Grid key={post._id} item xs={12} sm={6} md={6}>
//                 <Post post={post} setCurrentId={setCurrentId} />
//             </Grid>
//         ))}
//     </Grid>
// )}