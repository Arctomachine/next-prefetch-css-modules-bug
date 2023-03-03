import React from 'react';
import {PostType} from "../../utils/getPosts";
import PostCard from './PostCard';
import styles from './PostGrid.module.css'

function PostGrid({posts}: {
    posts: PostType[]
}) {
    return (
        <ul className={styles.container}>
            {posts.map(post => {
                return (
                    <PostCard post={post} key={post.id}/>
                )
            })}
        </ul>
    );
}

export default PostGrid;