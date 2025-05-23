import getPostMetadata from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog | Akash Agarwal",
  description: "Akash Agarwal's personal website and portfolio",
};

export default async function page() {
  const postMetadata = getPostMetadata("posts");

  return (
    <div className="flex justify-center px-4">
      <div className="prose w-full py-10 dark:prose-invert dark:prose-pre:bg-pre">
        <main data-testid="blog" className="pt-8">
          <header>
            <h1>All Posts</h1>
          </header>
          <ul>
            {postMetadata.map(
              (post: { slug: string; title: string; description: string }) => (
                <li key={post.slug}>
                  <Link href={`blog/${post.slug}`} data-testid="blog-item">
                    {post.title}
                  </Link>
                  {post.description ? (
                    <p className="!m-0">{post.description}</p>
                  ) : null}
                </li>
              )
            )}
          </ul>
        </main>
      </div>
    </div>
  );
}
