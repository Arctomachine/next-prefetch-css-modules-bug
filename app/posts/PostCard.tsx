import React from 'react';
import {PostType} from "../../utils/getPosts";
import styles from './PostCard.module.css'

function PostCard({post}: {
    post: PostType
}) {
    return (
        <li className={styles.container}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.text}>{post.body}</p>
        </li>
    );
}

export default PostCard;