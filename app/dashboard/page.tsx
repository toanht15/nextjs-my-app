import Link from "next/link";
import { Suspense } from "react";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res.ok);
    if (!res.ok) {
        throw new Error("Fail to fetch data");
    }
    return res.json();
}

export default async function Dashboard() {
    const posts = await getData();
    return (
        <div>
            <h1>All Posts</h1>

            <Suspense fallback={<div>Loading...</div>}>
                {(posts || []).map((post: any) => (
                    <Link href={"/dashboard/" + post?.id} key={post?.id}>
                        <div>{post?.title}</div>
                    </Link>
                ))}
            </Suspense>
        </div>
    );
}
