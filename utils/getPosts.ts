export default async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        next: {
            revalidate: 9999
        }
    })

    return res.json()
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}