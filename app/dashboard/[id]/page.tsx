async function getPost(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Fail to fetch data");
    }
    return res.json();
}

const Post = async ({ params: { id } }: { params: { id: number } }) => {
    const post = await getPost(id);
    console.log(post);
    return (
        <>
            <h1>Post id: {id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </>
    );
};

export default Post;
