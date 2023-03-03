import React from 'react';

function Page() {
    return (
        <div>
            <h1>Home page</h1>
            <p>Navigate to posts page to trigger bug. Check devtools to see if it is preloaded (in network tab you
                should see request to <code>/posts</code> with type <code>x-component</code>, filtered under XHR). What
                you should expect to see:</p>
            <ol>
                <li>Instant page transition</li>
                <li>All data on page will be raw html, no styles, no formatting</li>
                <li>Very soon styles are loaded and applied. It is <i>almost</i> instant, but still clearly visible, which makes it look like flickering</li>
            </ol>
			<p>Future attempts to visit this page will work normally. To reproduce bug again return to home page and reload.</p>
        </div>
    );
}

export default Page;