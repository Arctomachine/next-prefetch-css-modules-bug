import React from 'react';
import getPosts, {PostType} from "../../utils/getPosts";
import PostGrid from "./PostGrid";

async function Page() {
    const posts: PostType[] = await getPosts()

    return (
        <div>
            <h1>Posts page</h1>
            <PostGrid posts={posts}/>
        </div>
    );
}

export default Page;